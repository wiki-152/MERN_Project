import React from 'react';
import { MessageSquare, Video, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: <MessageSquare />,
    title: 'Real-Time Chat Assistance',
    description: 'Get instant support from our expert agents through our live chat feature.'
  },
  {
    icon: <Video />,
    title: 'Virtual Property Tours',
    description: 'Explore properties from the comfort of your home with our immersive virtual tours.'
  },
  {
    icon: <BarChart3 />,
    title: 'Advanced Analytics Dashboards',
    description: 'Make data-driven decisions with our comprehensive market analysis tools.'
  },
  {
    icon: <Shield />,
    title: 'Secure Escrow Services',
    description: 'Ensure safe transactions with our trusted escrow services.'
  },
  {
    icon: <MessageSquare />,
    title: '24/7 Customer Support',
    description: 'Our support team is available around the clock to assist you.'
  },
  {
    icon: <Video />,
    title: 'Mobile App Access',
    description: 'Manage your services on the go with our user-friendly mobile app.'
  },
  {
    icon: <BarChart3 />,
    title: 'Personalized Recommendations',
    description: 'Receive tailored suggestions based on your preferences and needs.'
  },
  {
    icon: <Shield />,
    title: 'Data Privacy Assurance',
    description: 'We prioritize your privacy and ensure your data is secure.'
  }
];

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-emerald-600 transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

