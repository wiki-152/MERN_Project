import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I list my property on your platform?",
    answer: "To list your property, simply create an account, click on 'List a Property', and follow the step-by-step guide to input your property details."
  },
  {
    question: "What are the fees for using your services?",
    answer: "Our fee structure varies depending on the type of service. Basic listings are free, while premium features and successful transactions have associated fees. Please check our pricing page for detailed information."
  },
  {
    question: "How can I schedule a virtual property tour?",
    answer: "You can schedule a virtual tour by clicking the 'Schedule Tour' button on any property listing. Choose a convenient time slot, and our team will set up the virtual tour."
  },
  {
    question: "Is my personal information secure on your platform?",
    answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to protect your personal information and transaction data."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit cards, PayPal, and bank transfers. Please refer to our payment page for more details."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team via email at support@example.com or through the contact form on our website."
  }
];

const FAQsComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-800 hover:bg-emerald-600 rounded transition duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-800 mt-1 rounded">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsComponent;

