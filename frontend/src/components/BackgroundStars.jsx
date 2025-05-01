import React from "react";

const BackgroundStars = () => {
  // Using a CSS background pattern for stars instead of an actual image
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 bg-black opacity-80"
        style={{ 
          backgroundImage: `radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `0 0, 20px 20px`
        }}
      />
      <div 
        className="absolute inset-0 opacity-60"
        style={{ 
          backgroundImage: `radial-gradient(white, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
          backgroundPosition: `10px 10px`
        }}
      />
    </div>
  );
};

export default BackgroundStars; 