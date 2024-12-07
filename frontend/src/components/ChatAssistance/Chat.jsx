import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const ChatAssistance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message. How can I assist you today?", isUser: false }]);
      }, 1000);
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
            <h3 className="text-white font-semibold">Chat Assistance</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 p-2 rounded-lg ${msg.isUser ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-700 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button type="submit" className="bg-emerald-500 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-600 transition-colors">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatAssistance;

