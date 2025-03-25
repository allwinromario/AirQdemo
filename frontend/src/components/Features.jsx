
import React from "react";
import { Globe, ChartBar, Database, Cpu, Map, Layers } from "lucide-react";

const Features = () => {
  return (
    <div className="py-20 relative" id="technology">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Advanced AI/ML Technology
          </h2>
          <p className="text-white/70">
            Our cutting-edge approach combines satellite data with machine learning to provide unprecedented air quality insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Globe className="h-6 w-6 text-space-blue" />}
            title="Satellite Data Integration"
            description="Seamlessly combines data from multiple satellite sources to create comprehensive air quality maps."
          />
          
          <FeatureCard 
            icon={<Cpu className="h-6 w-6 text-space-teal" />}
            title="Advanced ML Algorithms"
            description="Utilizes state-of-the-art machine learning models to identify patterns and predict air quality with high precision."
          />
          
          <FeatureCard 
            icon={<Map className="h-6 w-6 text-space-cyan" />}
            title="High-Resolution Mapping"
            description="Downscales satellite data to provide fine spatial resolution maps for detailed local analysis."
          />
          
          <FeatureCard 
            icon={<ChartBar className="h-6 w-6 text-space-blue" />}
            title="Real-time Analytics"
            description="Processes data in real-time to provide up-to-date air quality information for immediate decision-making."
          />
          
          <FeatureCard 
            icon={<Database className="h-6 w-6 text-space-teal" />}
            title="Comprehensive Data Storage"
            description="Maintains historical air quality data for trend analysis and long-term environmental planning."
          />
          
          <FeatureCard 
            icon={<Layers className="h-6 w-6 text-space-cyan" />}
            title="Multi-Pollutant Analysis"
            description="Tracks multiple pollutants simultaneously for a complete picture of air quality conditions."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-white/20">
      <div className="bg-black/20 rounded-xl p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl font-medium mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default Features;
