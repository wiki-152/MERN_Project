import React from 'react';
import { Building2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Building2 className="mr-2" /> About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              We are a cutting-edge marketplace offering an extensive variety in properties and real estate dealings. Our platform is dedicated to providing excellence in every transaction, leveraging technology to streamline the property buying, selling, and renting process.
            </p>
            <p>
              With a commitment to innovation and customer satisfaction, we're revolutionizing the real estate industry by offering advanced tools, real-time assistance, and comprehensive analytics to empower our clients in making informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://th.bing.com/th/id/OIP.y0jzAwClJW3vHtWABwUJiQHaE7?w=347&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Office 1" className="rounded-lg" />
            <img src="https://th.bing.com/th/id/OIP.le78QzhGF459GSnbgZnxVAHaEK?w=335&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Office 2" className="rounded-lg" />
            <img src="https://th.bing.com/th/id/R.d19fdd8a92ca7dc7b519b0bc7397322f?rik=3cm%2bhce%2fSu2apA&pid=ImgRaw&r=0" alt="Office 3" className="rounded-lg" />
            <img src="https://wallpapercave.com/wp/wp8477822.jpg" alt="Office 4" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

