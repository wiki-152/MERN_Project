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
          <i className="fas fa-plus"></i>
        </button>
        
        <button 
          className="control-btn"
          onClick={onZoomOut}
          title="Zoom Out"
        >
          <i className="fas fa-minus"></i>
        </button>

        <button 
          className="control-btn"
          onClick={onRotateLeft}
          title="Rotate Left"
        >
          <i className="fas fa-undo"></i>
        </button>

        <button 
          className="control-btn"
          onClick={onRotateRight}
          title="Rotate Right"
        >
          <i className="fas fa-redo"></i>
        </button>

        <button 
          className="control-btn"
          onClick={onFullscreen}
          title="Toggle Fullscreen"
        >
          <i className="fas fa-expand"></i>
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
        <p className="scene-info">
          {scenes[currentScene]?.description || 'No description available'}
        </p>
      </div>

      {/* Help Button */}
      <button 
        className="help-btn"
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