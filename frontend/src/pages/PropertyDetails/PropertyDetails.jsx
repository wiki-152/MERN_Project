import React from 'react';
import PropertyGallery from '../../components/Properties/PropertyGallery';
import PropertyHeader from '../../components/Properties/PropertiesHeader';
import PropertyDescription from '../../components/Properties/PropertyDescription';
import img1 from '../../assets/images/property_sample_1.jpg';
import img2 from '../../assets/images/property_sample_2.jpg';
import img3 from '../../assets/images/property_sample_3.jpg';
import ContactForm from '../../components/ContactSend/ContactSend';

// This data would come from your backend
const mockData = {
  images: [
    img1,
    img2,
    img3,
  ],
  title: '3.5 rooms, 60m², CHF 780,000.–',
  location: '3000 Bern',
  price: 'CHF 780,000.–',
  isPremium: true,
  description: '"Im Erholungsgebiet Magglingen voll ausgestattetes kompaktes Refugium, ab CHF 780\'000.- inkl. Carport" • Baubewilligtes Projekt, als Erst- oder Zweitwohnsitz möglich • 45 min von Bern das eigene Haus im Grünen und über dem Nebel • Lage: Auf der Jura-Hügelkette über Biel und dem Bielersee mit Blick ins Seeland und in die Alpen • Adresse: End der Welt strasse 17, 2532 Magglingen • Magglingen: aussergewöhnliche Lebensqualität in idyllischer Natur, steuergünstig, in 6 Minuten mit der Standseilbahn in Biel, Bern ist über die nahe Autobahn gut erreichbar • die mit viel Komfort ausgestatteten 2-geschossigen Häuser verbinden alle...',
};

export default function PropertyDetails() {
  return (
    <div className="mx-auto p-8 bg-gray-800">
      <div className="space-y-8">
        <PropertyGallery images={mockData.images} />
        <PropertyHeader
          title={mockData.title}
          location={mockData.location}
          price={mockData.price}
          isPremium={mockData.isPremium}
        />
        <PropertyDescription description={mockData.description} />
      </div>

      <ContactForm />
    </div>
  );
}

