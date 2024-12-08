// components/VirtualTour.js
import React, { useState, useEffect, useRef } from 'react';
import { Pannellum } from 'pannellum-react';
import TourControls from './TourControls';
import HotspotContent from './HotspotContent';
import tourConfig from './data/tourConfig';
import './styles/virtualTour.css';

const VirtualTour = () => {
  const [currentScene, setCurrentScene] = useState(tourConfig.defaultScene);
  const [isLoading, setIsLoading] = useState(true);
  const [yaw, setYaw] = useState(180);
  const [pitch, setPitch] = useState(10);
  const [hfov, setHfov] = useState(110);
  const viewerRef = useRef(null);

  useEffect(() => {
    // Initialize viewer when component mounts
    setIsLoading(false);
  }, []);

  // Control handlers
  const handleZoomIn = () => {
    if (hfov > 40) {
      setHfov(prevHfov => prevHfov - 10);
    }
  };

  const handleZoomOut = () => {
    if (hfov < 120) {
      setHfov(prevHfov => prevHfov + 10);
    }
  };

  const handleRotateLeft = () => {
    setYaw(prevYaw => prevYaw - 45);
  };

  const handleRotateRight = () => {
    setYaw(prevYaw => prevYaw + 45);
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  const handleSceneChange = (sceneId) => {
    setIsLoading(true);
    setCurrentScene(sceneId);
    // Reset view parameters for new scene
    setYaw(180);
    setPitch(10);
    setHfov(110);
    setIsLoading(false);
  };

  // Handle hotspot clicks
  const handleHotspotClick = (evt, args) => {
    if (args.type === 'scene') {
      handleSceneChange(args.sceneId);
    } else if (args.type === 'info') {
      // Show info hotspot content
      return (
        <HotspotContent 
          title={args.title}
          description={args.description}
          price={args.price}
          area={args.area}
          features={args.features}
        />
      );
    }
  };

  if (isLoading) {
    return <div className="loading">Loading virtual tour...</div>;
  }

  return (
    <div className="virtual-tour-container">
      {/* Main viewer */}
      <Pannellum
        ref={viewerRef}
        width="100%"
        height="500px"
        image={tourConfig.scenes[currentScene].image}
        pitch={pitch}
        yaw={yaw}
        hfov={hfov}
        autoLoad
        onLoad={() => setIsLoading(false)}
        onError={(err) => console.error('Pannellum error:', err)}
        hotSpots={tourConfig.scenes[currentScene].hotSpots}
        onHotspotClick={handleHotspotClick}
        compass={true}
        title={tourConfig.scenes[currentScene].title}
        author="TiefenReich"
        sceneFadeDuration={1000}
      />

      {/* Controls */}
      <TourControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onRotateLeft={handleRotateLeft}
        onRotateRight={handleRotateRight}
        onFullscreen={handleFullscreen}
        currentScene={currentScene}
        scenes={tourConfig.scenes}
        onSceneChange={handleSceneChange}
      />

      {/* Scene info display */}
      <div className="scene-info -mt-4 ml-4">
        <h3>{tourConfig.scenes[currentScene].title}</h3>
        <p>{tourConfig.scenes[currentScene].description}</p>
      </div>

      {/* Error boundary */}
      <div className="error-message" style={{ display: 'none' }}>
        Failed to load virtual tour. Please try refreshing the page.
      </div>
    </div>
  );
};

// Default props
VirtualTour.defaultProps = {
  initialScene: 'entrance',
  showControls: true,
  enableCompass: true
};

export default VirtualTour;