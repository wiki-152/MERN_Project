import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ReviewSystem = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the rating and review to your backend
    console.log('Rating:', rating, 'Review:', review);
    // Reset form
    setRating(0);
    setReview('');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Review and Rating</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-lg mb-2">Your Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`mr-1 ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                <Star fill={star <= rating ? 'currentColor' : 'none'} size={32} />
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="review" className="block text-lg mb-2">Your Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Write your review here..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors w-full"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewSystem;

