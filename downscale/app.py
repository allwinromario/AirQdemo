import streamlit as st
import numpy as np
import matplotlib.pyplot as plt
from scipy.ndimage import gaussian_filter, zoom
import cartopy.crs as ccrs
import cartopy.feature as cfeature
from datetime import date
from sklearn.linear_model import LinearRegression
import pandas as pd
import io

# Set page config
st.set_page_config(
    page_title="NO2 Data Downscaling",
    page_icon="🌍",
    layout="wide"
)

# Title and description
st.title("🌍 Sentinel-5P NO2 Data Downscaling")
st.markdown("""
This advanced app performs spatial downscaling of NO₂ data with additional analysis features.
""")

# Sidebar controls
with st.sidebar:
    st.header("Controls")
    sigma = st.slider("Smoothing factor (sigma)", 0.1, 5.0, 1.0, 0.1)
    vmin = st.number_input("Minimum value", 0.0, 1.0, 0.0, 0.01)
    vmax = st.number_input("Maximum value", 0.0, 1.0, 0.5, 0.01)
    cmap = st.selectbox("Color map", ["viridis", "plasma", "inferno", "magma", "cividis"])
    
    # New features
    st.subheader("Advanced Options")
    downscale_factor = st.slider("Downscaling factor", 2, 10, 4, 1)
    downscale_method = st.selectbox("Downscaling method", 
                                  ["Gaussian Smoothing", 
                                   "Bilinear Interpolation",
                                   "Cubic Spline",
                                   "Regression-Based"],
                                  index=1)
    
    export_format = st.selectbox("Export format", ["PNG", "PDF", "CSV"])

# Generate sample data - FIXED PARENTHESES HERE
def generate_sample_data():
    lat = np.linspace(-90, 90, 180)
    lon = np.linspace(-180, 180, 360)
    lon_grid, lat_grid = np.meshgrid(lon, lat)
    
    # Fixed the parentheses issue by properly grouping operations
    sin_term = np.sin(np.radians(lat_grid*2))**2
    cos_term = np.cos(np.radians(lon_grid))/2
    data = sin_term * cos_term
    
    # Hotspots
    data[60:80, 100:120] += 0.5  # Europe
    data[30:50, 200:220] += 0.4  # North America
    data[20:40, 70:90] += 0.6    # Middle East
    
    data += np.random.normal(0, 0.1, data.shape)
    return data, lat, lon

# Downscaling function
def downscale_data(data, factor, method):
    if method == "Gaussian Smoothing":
        smoothed = gaussian_filter(data, sigma=1)
        return zoom(smoothed, factor, order=0)
    elif method == "Bilinear Interpolation":
        return zoom(data, factor, order=1)
    elif method == "Cubic Spline":
        return zoom(data, factor, order=3)
    elif method == "Regression-Based":
        rows, cols = data.shape
        x = np.linspace(0, 1, cols)
        y = np.linspace(0, 1, rows)
        xx, yy = np.meshgrid(x, y)
        model = LinearRegression()
        X = np.column_stack([xx.ravel(), yy.ravel()])
        model.fit(X, data.ravel())
        new_x = np.linspace(0, 1, cols*factor)
        new_y = np.linspace(0, 1, rows*factor)
        new_xx, new_yy = np.meshgrid(new_x, new_y)
        X_new = np.column_stack([new_xx.ravel(), new_yy.ravel()])
        return model.predict(X_new).reshape(rows*factor, cols*factor)

# Plotting function
def plot_no2_data(data, lat, lon, title):
    fig = plt.figure(figsize=(12, 6))  # FIXED THE FIGURE SIZE TUPLE HERE
    ax = plt.axes(projection=ccrs.PlateCarree())
    mesh = ax.pcolormesh(lon, lat, data, 
                        cmap=cmap,
                        vmin=vmin,
                        vmax=vmax,
                        transform=ccrs.PlateCarree())
    ax.add_feature(cfeature.COASTLINE, linewidth=0.5)
    ax.add_feature(cfeature.BORDERS, linestyle=':', linewidth=0.2)
    ax.gridlines(draw_labels=True)
    plt.title(title, fontsize=14)
    plt.colorbar(mesh, orientation='vertical', label='NO₂ Concentration')
    return fig

# Generate data
data, lat, lon = generate_sample_data()

# Process data
filled_data = np.where(np.isnan(data), 0, data)
enhanced_data = gaussian_filter(filled_data, sigma=sigma)

# Downscale data
downscaled_data = downscale_data(enhanced_data, downscale_factor, downscale_method)
new_lat = np.linspace(lat.min(), lat.max(), downscaled_data.shape[0])
new_lon = np.linspace(lon.min(), lon.max(), downscaled_data.shape[1])

# Create tabs
tab1, tab2, tab3 = st.tabs(["Original Data", "Processed Data", "Downscaled Data"])

with tab1:
    st.pyplot(plot_no2_data(data, lat, lon, "Original NO₂ Data"))

with tab2:
    st.pyplot(plot_no2_data(enhanced_data, lat, lon, "Processed NO₂ Data"))

with tab3:
    st.pyplot(plot_no2_data(downscaled_data, new_lat, new_lon, 
                          f"Downscaled NO₂ Data ({downscale_factor}x)"))
    
    # Difference map
    fig_diff = plt.figure(figsize=(12, 6))  # FIXED HERE TOO
    ax = plt.axes(projection=ccrs.PlateCarree())
    upsampled_original = zoom(enhanced_data, downscale_factor, order=0)
    diff = downscaled_data - upsampled_original
    mesh = ax.pcolormesh(new_lon, new_lat, diff, 
                        cmap='coolwarm',
                        vmin=-0.2,
                        vmax=0.2,
                        transform=ccrs.PlateCarree())
    ax.add_feature(cfeature.COASTLINE, linewidth=0.5)
    ax.gridlines(draw_labels=True)
    plt.title("Difference: Downscaled - Original", fontsize=14)
    plt.colorbar(mesh, orientation='vertical', label='NO₂ Concentration Difference')
    st.pyplot(fig_diff)

# Metrics
st.header("Data Statistics")
cols = st.columns(3)
with cols[0]:
    st.metric("Original Mean", f"{np.nanmean(data):.4f}")
with cols[1]:
    st.metric("Processed Mean", f"{np.mean(enhanced_data):.4f}")
with cols[2]:
    st.metric("Downscaled Mean", f"{np.mean(downscaled_data):.4f}")

# Export functionality
if export_format == "PNG" and st.button("Export Current View"):
    buf = io.BytesIO()
    plt.savefig(buf, format="png", dpi=300)
    st.download_button(
        label="Download PNG",
        data=buf,
        file_name="no2_data.png",
        mime="image/png"
    )