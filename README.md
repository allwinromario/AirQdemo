# AirQ: Downscaling Satellite-based Air Quality Maps using AI/ML

# 🌍 Project Overview

AirQ is an AI-powered solution that enhances low-resolution satellite air quality data into high-resolution pollution maps, specifically targeting Nitrogen Dioxide (NO₂) levels. By integrating satellite imagery, ground sensors, and weather data, we enable precise air quality monitoring for better urban planning and pollution control.

# Problem Statement:

* Traditional air quality monitoring lacks fine spatial resolution.

* Satellite data is often too coarse for city-level analysis.

* Need for AI-driven downscaling to improve decision-making.

# Solution:

✔ Deep Learning-based super-resolution for air quality maps

✔ Multi-source data fusion (satellite + sensors + weather)

✔ Interactive visualization for policymakers

# ✨ Key Features

* High-resolution NO₂ mapping (downscaled from Sentinel-5P data)

* Gap-filling predictions for areas with missing data

* Real-time AQI dashboard

* Scalable model for global city-level analysis

# 🛠 Tech Stack

| Category         | Technologies Used |
|------------------|-------------------|
| **Languages**    | Python, TypeScript, JavaScript, HTML/CSS |
| **ML Frameworks** | TensorFlow, PyTorch, Scikit-Learn |
| **Data Processing** | Pandas, NumPy |
| **Visualization** | Matplotlib, Seaborn, Plotly |
| **Geospatial**   | Shapely, Rasterio, Leaflet.js, Google Earth Engine |
| **Cloud/APIs**   | AWS, Azure, Flask, Google Cloud API, AQICN API |
| **Frontend**     | React, Next.js, JavaScript |
| **Version Control** | Git, GitHub |

# 🔬 Methodology

* Data Collection – Satellite (NASA Sentinel), ground sensors (AQICN), weather data

* Preprocessing – Noise removal, normalization, alignment

* Feature Engineering – Extract NO₂, weather, and geospatial features

* Model Training – CNN, Random Forest, Deep Learning

* Validation – Compare with real-world sensor data

* Deployment – Cloud-based API (AWS/Azure)

## ⚙ Installation

### Prerequisites
- Python 3.8+
- Node.js 14+
- Git

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/allwinromario/AirQ.git
   cd AirQ

2. **Set up a Python virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate    # Windows

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt

4. **Set up the frontend**:
   ```bash
   cd frontend
   npm install

# Running the Application
5. **Frontend Development Server**:
   ```bash
   cd frontend
   npm run dev
   
6. **Sentinel-5P NO₂ Data Downscaling**:
    ```bash
    cd downscale
    python -m streamlit run app.py

# 📊 Results

✅ Fine-grained NO₂ maps (10x higher resolution than raw satellite data)

✅ Predicted AQI for areas with missing data

✅ Policy-friendly visualizations for urban planners

# 👥 Team

* V. Allwin Romario Fernando

* Vidhi Dattatraya Kamat

* Mohammed Yousuf Furqan

* Fathima Kohnain
