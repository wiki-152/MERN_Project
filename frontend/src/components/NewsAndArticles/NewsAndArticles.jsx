import React from 'react';
import { Calendar, User } from 'lucide-react';

const articles = [
  {
    title: "The Future of Real Estate: AI and Virtual Reality",
    excerpt: "Explore how artificial intelligence and virtual reality are reshaping the real estate industry...",
    author: "Jane Doe",
    date: "2023-05-15",
    link: "https://th.bing.com/th/id/R.d84836b22cd7f80ffc771bf95ff74fcf?rik=IlTiJnnkRmI91A&pid=ImgRaw&r=0"
  },
  {
    title: "5 Tips for First-Time Home Buyers in 2023",
    excerpt: "Navigate the challenging housing market with these essential tips for first-time buyers...",
    author: "John Smith",
    date: "2023-05-10",
    link: "https://miro.medium.com/v2/resize:fit:1358/1*Zs8znwsRPjyMfFwQsYgJqA.png"
  },
  {
    title: "Commercial Real Estate Trends Post-Pandemic",
    excerpt: "Discover how the commercial real estate landscape has evolved in the wake of the global pandemic...",
    author: "Emily Johnson",
    date: "2023-05-05",
    link: "https://artart-uploads.s3.amazonaws.com/2023/04/2023-04-19-ai-kr-image5-939763-4Kp20eZR.webp"
  }
];

const NewsAndArticles = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">News and Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img src={article.link} alt={article.title} className="w-full h-48 object-cover" />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <User className="mr-1" size={16} /> {article.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1" size={16} /> {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticles;

