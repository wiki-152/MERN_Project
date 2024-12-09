// data/tourConfig.js

import sample from '../../../assets/imagesForVRTour/sample.jpg';
import livingRoom from '../../../assets/imagesForVRTour/living-room.jpg';
import kitchen from '../../../assets/imagesForVRTour/kitchen.jpg';


const tourConfig = {
    defaultScene: "entrance",
    autoLoad: true,
    sceneFadeDuration: 1000,
    
    scenes: {
      entrance: {
        id: "entrance",
        title: "Entrance",
        description: "Main entrance area of the property",
        image: sample,
        hotSpots: [
          {
            pitch: -2.1,
            yaw: 132.9,
            type: "scene",
            text: "View Living Room",
            sceneId: "livingRoom",
            cssClass: "custom-hotspot"
          },
          {
            pitch: 1.5,
            yaw: -67.7,
            type: "info",
            text: "Main Entrance",
            title: "Main Entrance",
            description: "Modern secure entrance with keyless access system"
          }
        ]
      },
  
      livingRoom: {
        id: "livingRoom",
        title: "Living Room",
        description: "Spacious living room with natural lighting",
        image: livingRoom,
        hotSpots: [
          {
            pitch: 0,
            yaw: -70,
            type: "scene",
            text: "Back to Entrance",
            sceneId: "entrance",
            cssClass: "custom-hotspot"
          },
          {
            pitch: -1.5,
            yaw: 125.8,
            type: "scene",
            text: "View Kitchen",
            sceneId: "kitchen",
            cssClass: "custom-hotspot"
          },
          {
            pitch: -0.5,
            yaw: 45.3,
            type: "info",
            text: "Living Area Features",
            title: "Living Area",
            description: "Features include high ceilings, hardwood floors, and large windows"
          }
        ]
      },
  
      kitchen: {
        id: "kitchen",
        title: "Kitchen",
        description: "Modern fully equipped kitchen",
        image: kitchen, 
        hotSpots: [
          {
            pitch: -2.1,
            yaw: -43.2,
            type: "scene",
            text: "Back to Living Room",
            sceneId: "livingRoom",
            cssClass: "custom-hotspot"
          },
          {
            pitch: 0.8,
            yaw: 123.5,
            type: "info",
            text: "Kitchen Features",
            title: "Kitchen Amenities",
            description: "Modern appliances including dishwasher, microwave, and gas stove"
          }
        ]
      }
    },
  
    // Tour settings
    settings: {
      compass: true,
      mouseZoom: true,
      autoRotate: -2,
      autoRotateInactivityDelay: 3000,
      firstScene: "entrance",
      sceneFadeDuration: 1000,
      previewTitle: true,
      showControls: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
      keyboardZoom: true
    },
  
    // Hotspot styles
    hotSpotStyles: {
      "custom-hotspot": {
        backColor: "rgba(58, 132, 255, 0.3)",
        borderColor: "#3A84FF",
        borderWidth: 2,
        fontSize: "1.2em",
        fontColor: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        textShadow: "0 1px 4px rgba(0,0,0,0.6)"
      }
    },
  
    // Property details that can be shown in info hotspots
    propertyDetails: {
      price: "$450,000",
      size: "2,200 sq ft",
      bedrooms: 3,
      bathrooms: 2,
      yearBuilt: 2020,
      features: [
        "Hardwood floors",
        "Modern kitchen",
        "Large windows",
        "Central heating/cooling",
        "Attached garage"
      ]
    }
  };
  export default tourConfig;