import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';

const FeedbackOverview = () => {
  const [reviews, setReviews] = useState([
    { id: 1, customer: 'Alice', rating: 5, comment: 'Great product!', response: '' },
    { id: 2, customer: 'Bob', rating: 4, comment: 'Good service, but could be faster.', response: '' },
    { id: 3, customer: 'Charlie', rating: 3, comment: 'Average experience.', response: '' },
  ]);

  const [newResponse, setNewResponse] = useState('');
  const [respondingTo, setRespondingTo] = useState(null);

  const handleRespond = (id) => {
    setRespondingTo(id);
    setNewResponse('');
  };

  const submitResponse = (id) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, response: newResponse } : review
    ));
    setRespondingTo(null);
    setNewResponse('');
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Feedback Overview</h2>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">{review.customer}</span>
            <span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`inline ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  size={16}
                />
              ))}
            </span>
          </div>
          <p className="mb-2">{review.comment}</p>
          {review.response && (
            <div className="mt-2 p-2 bg-gray-700 rounded">
              <p className="text-sm italic">Your response: {review.response}</p>
            </div>
          )}
          {!review.response && respondingTo !== review.id && (
            <button
              onClick={() => handleRespond(review.id)}
              className="mt-2 bg-gray-700 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded transition duration-300"
            >
              <MessageSquare className="inline mr-1" size={16} />
              Respond
            </button>
          )}
          {respondingTo === review.id && (
            <div className="mt-2">
              <textarea
                value={newResponse}
                onChange={(e) => setNewResponse(e.target.value)}
                className="w-full p-2 bg-gray-700 text-white rounded"
                rows="2"
              ></textarea>
              <button
                onClick={() => submitResponse(review.id)}
                className="mt-2 bg-gray-700 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded transition duration-300"
              >
                Submit Response
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedbackOverview;

