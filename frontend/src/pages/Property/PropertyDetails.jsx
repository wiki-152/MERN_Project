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
