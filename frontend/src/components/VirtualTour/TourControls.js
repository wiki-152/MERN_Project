// components/TourControls.js
import React from 'react';
import './styles/virtualTour.css'

const TourControls = ({ 
  onZoomIn, 
  onZoomOut, 
  onRotateLeft, 
  onRotateRight,
  onFullscreen,
  currentScene,
  scenes,
  onSceneChange 
}) => {
  return (
    <div className="tour-controls">
      {/* Main Controls */}
      <div className="control-group primary-controls">
        <button 
          className="control-btn"
          onClick={onZoomIn}
          title="Zoom In"
        >
          <img src="https://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Zoom-In-icon.png" alt="Zoom In" />
        </button>
        
        <button 
          className="control-btn"
          onClick={onZoomOut}
          title="Zoom Out"
        >
          <img src="https://www.freeiconspng.com/uploads/zoom-out-icon-png-24.png" alt="Zoom Out" />
        </button>

        <button 
          className="control-btn"
          onClick={onRotateLeft}
          title="Rotate Left"
        >
          <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236981/rotate-left-icon-md.png" alt="Rotate Left" />
        </button>

        <button 
          className="control-btn"
          onClick={onRotateRight}
          title="Rotate Right"
        >
          <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236983/rotate-right-icon-md.png" alt="Rotate Right" />
        </button>

        <button 
          className="control-btn"
          onClick={onFullscreen}
          title="Toggle Fullscreen"
        >
          <img src="https://www.freeiconspng.com/uploads/full-screen-icon-png-18.png" alt="Toggle Fullscreen" />
        </button>
      </div>

      {/* Scene Selection */}
      <div className="scene-selection">
        <select 
          value={currentScene}
          onChange={(e) => onSceneChange(e.target.value)}
          className="scene-select"
        >
          {Object.keys(scenes).map((sceneId) => (
            <option key={sceneId} value={sceneId}>
              {scenes[sceneId].title}
            </option>
          ))}
        </select>
      </div>

      {/* Info Panel */}
      <div className="info-panel">
        <p className="scene-info ml-6">
          {scenes[currentScene]?.description || 'No description available'}
        </p>
      </div>

      {/* Help Button */}
      <button 
        className="help-btn "
        onClick={() => alert('Use controls to navigate. Click hotspots to move between rooms.')}
      >
        <i className="fas fa-question-circle"></i>
      </button>
    </div>
  );
};

// Default props
TourControls.defaultProps = {
  scenes: {},
  currentScene: '',
  onZoomIn: () => console.log('Zoom in'),
  onZoomOut: () => console.log('Zoom out'),
  onRotateLeft: () => console.log('Rotate left'),
  onRotateRight: () => console.log('Rotate right'),
  onFullscreen: () => console.log('Toggle fullscreen'),
  onSceneChange: () => console.log('Scene changed')
};

export default TourControls;