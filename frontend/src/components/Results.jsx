
import React from "react";
import { ChartBar, AreaChart } from "lucide-react";

const Results = () => {
  return (
    <div className="py-16 relative" id="results">
      <div className="container px-7">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Results
          </h2>
          <p className="text-white/70">
            Our cutting-edge approach combines satellite data with machine learning to provide unprecedented air quality insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Result card with View button */}
          <ResultCard
            title="Our Planet's Air"
            description="Our Planet's Air visualizes real-time air quality data from the World Air Quality Index API, showing key pollutants like PM2.5, PM10, NO2, and CO on an interactive map to track pollution trends."
            link="http://airqnet.netlify.app"
          />

          <ResultCard
            title="Global Air Quality Tracker"
            description="Global Air Quality Tracker monitors real-time air pollution using the OpenWeather API, displaying key pollutants like PM2.5, PM10, NO2, and CO on an interactive map to track trends."
            link="YOUR_BACKEND_LINK_HERE"
          />

          <ResultCard
            title="Air Quality Edge Functions"
            description="Air Quality Edge Functions uses Netlify Edge Functions to fetch real-time air quality data, delivering key pollutants like PM2.5, PM10, and CO for fast, dynamic updates."
            link="YOUR_BACKEND_LINK_HERE"
          />
        </div>
      </div>
    </div>
  );
};

const ResultCard = ({ icon, title, description, link }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105 duration-300">
      {/* Show icon if available, else show button */}
      {icon ? (
        <div className="bg-black/20 rounded-xl p-3 w-fit mb-4">{icon}</div>
      ) : link ? (
        <button
          onClick={() => window.location.href = link}
          className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View
        </button>
      ) : null}

      <h3 className="font-display text-xl font-medium mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default Results;
