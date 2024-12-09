import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import axios from 'axios';

const ChatAssistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    text: "Enter the city you're interested in and I'll help you find the perfect property!",
    isUser: false
  }]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setIsLoading(true);

      try {
        const response = await axios.post('https://mern-projectb.vercel.app/api/chat/chat', {
          query: inputMessage,
          location: null
        });

        const aiResponse = response.data.reply?.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!aiResponse) {
          throw new Error('Invalid response format');
        }

        const propertyData = response.data.propertyData;
        const hasValidPropertyData = propertyData && 
          ((propertyData.avgRentPerNight && propertyData.avgRentPerNight !== 'N/A') ||
           (propertyData.avgRentPrice && propertyData.avgRentPrice !== 'N/A')) &&
          propertyData.avgDistance !== 'N/A';

        setMessages(prev => [...prev, { 
          text: aiResponse, 
          isUser: false,
          propertyData: hasValidPropertyData ? propertyData : null
        }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages(prev => [...prev, { 
          text: "I apologize, but I'm having trouble accessing property information at the moment. Please try asking a general question about real estate or try again later.", 
          isUser: false 
        }]);
      } finally {
        setIsLoading(false);
        setInputMessage('');
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button onClick={toggleChat} className="bg-emerald-500 text-white p-3 rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-gray-800 w-80 h-96 rounded-lg shadow-xl flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">Real Estate Assistant</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 p-2 rounded-lg ${msg.isUser ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-white'}`}>
                  {msg.text}
                  {msg.propertyData && !msg.isUser && (
                    <div className="mt-2 text-sm text-gray-300">
                      {msg.propertyData.avgRentPerNight && msg.propertyData.avgRentPerNight !== 'N/A' && (
                        <p>Average Rent Per Night: ${msg.propertyData.avgRentPerNight}</p>
                      )}
                      {msg.propertyData.avgRentPrice && msg.propertyData.avgRentPrice !== 'N/A' && (
                        <p>Average Monthly Rent: ${msg.propertyData.avgRentPrice}</p>
                      )}
                      {msg.propertyData.avgDistance && msg.propertyData.avgDistance !== 'N/A' && (
                        <p>Average Distance: {msg.propertyData.avgDistance}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-white p-2 rounded-lg">
                  <div className="animate-pulse">Typing...</div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-700 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about properties..."
              className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="bg-emerald-500 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistance;

