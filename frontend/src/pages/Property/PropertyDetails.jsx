// PropertyDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePropertyStore from '../../stores/propertyStore';
import PropertyGallery from '../../components/Properties/PropertyGallery';
import PropertyHeader from '../../components/Properties/PropertiesHeader';
import PropertyDescription from '../../components/Properties/PropertyDescription';
import ContactForm from '../../components/ContactSend/ContactSend';

export default function PropertyDetails() {
  const { id } = useParams();
  const { fetchPropertyDetails, propertyDetails, isLoading, error } = usePropertyStore();

  useEffect(() => {
    fetchPropertyDetails(id); // Fetch property on page load
  }, [id, fetchPropertyDetails]);

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!propertyDetails) return <p className="text-white">No Property Found</p>;

  return (
    <div className="mx-auto p-8 bg-gray-800">
      <div className="space-y-8">
        <PropertyGallery images={propertyDetails.images} />
        <PropertyHeader
          title={propertyDetails.title}
          location={propertyDetails.location}
          price={propertyDetails.rentPrice}
          isPremium={propertyDetails.isPremium}
        />
        <PropertyDescription description={propertyDetails.description} />
      </div>

      <ContactForm />
    </div>
  );
}

// Leaflet Map

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import usePropertyStore from '../../stores/propertyStore';
// import PropertyGallery from '../../components/Properties/PropertyGallery';
// import PropertyHeader from '../../components/Properties/PropertiesHeader';
// import PropertyDescription from '../../components/Properties/PropertyDescription';
// import ContactForm from '../../components/ContactSend/ContactSend';

// // Custom marker icon
// const customIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   iconSize: [25, 41], // Size of the icon
//   iconAnchor: [12, 41], // Anchor point of the icon
//   popupAnchor: [1, -34], // Point where the popup opens relative to the icon
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41], // Size of the shadow
// });

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const { fetchPropertyDetails, propertyDetails, isLoading, error } = usePropertyStore();
//   const [geoLocation, setGeoLocation] = useState(null);
//   const [geoError, setGeoError] = useState(null);

//   useEffect(() => {
//     fetchPropertyDetails(id);
//   }, [id, fetchPropertyDetails]);

//   useEffect(() => {
//     const fetchGeoLocation = async (address) => {
//       try {
//         const response = await fetch(
//           `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//             address
//           )}&key=085036251685417d936675b0210098f2`
//         );
//         const data = await response.json();
//         if (data.results && data.results.length > 0) {
//           const { lat, lng } = data.results[0].geometry;
//           setGeoLocation({ latitude: lat, longitude: lng });
//         } else {
//           setGeoError('Unable to fetch location for the provided address.');
//         }
//       } catch (error) {
//         setGeoError('Error fetching geolocation data.');
//       }
//     };

//     if (propertyDetails && propertyDetails.location) {
//       fetchGeoLocation(propertyDetails.location);
//     }
//   }, [propertyDetails]);

//   if (isLoading) return <p className="text-white">Loading...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;
//   if (!propertyDetails) return <p className="text-white">No Property Found</p>;

//   return (
//     <div className="mx-auto p-8 bg-gray-800">
//       <div className="space-y-8">
//         <PropertyGallery images={propertyDetails.images} />
//         <PropertyHeader
//           title={propertyDetails.title}
//           location={propertyDetails.location}
//           price={propertyDetails.rentPrice}
//           isPremium={propertyDetails.isPremium}
//         />
//         <PropertyDescription description={propertyDetails.description} />
//       </div>

//       <div className="flex flex-col lg:flex-row lg:space-x-4 mt-8">
//         {/* OpenStreetMap Section with contained controls */}
//         <div className="flex-1 mb-4 lg:mb-0">
//           <div 
//             className="rounded-lg overflow-hidden border border-gray-700 relative"
//             style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
//           >
//             {geoLocation ? (
//               <div className="h-[400px] w-full">
//                 <MapContainer
//                   center={[geoLocation.latitude, geoLocation.longitude]}
//                   zoom={13}
//                   style={{ height: '100%', width: '100%' }}
//                   className="rounded-lg"
//                   zoomControl={false} // Disable default zoom control
//                 >
//                   <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   />
//                   <Marker
//                     position={[geoLocation.latitude, geoLocation.longitude]}
//                     icon={customIcon}
//                   >
//                     <Popup>{propertyDetails.title}</Popup>
//                   </Marker>
//                   {/* Add zoom control in a specific position */}
//                   <div className="leaflet-control-container">
//                     <div className="leaflet-top leaflet-right">
//                       <div className="leaflet-control-zoom leaflet-bar leaflet-control">
//                         <a className="leaflet-control-zoom-in" href="#" title="Zoom in">+</a>
//                         <a className="leaflet-control-zoom-out" href="#" title="Zoom out">-</a>
//                       </div>
//                     </div>
//                   </div>
//                 </MapContainer>
//               </div>
//             ) : geoError ? (
//               <div className="h-[400px] w-full flex items-center justify-center">
//                 <p className="text-white p-4">{geoError}</p>
//               </div>
//             ) : (
//               <div className="h-[400px] w-full flex items-center justify-center">
//                 <p className="text-white p-4">Fetching location...</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="flex-1">
//           <ContactForm />
//         </div>
//       </div>
//     </div>
//   );
// }
