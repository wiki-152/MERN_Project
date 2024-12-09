import React from 'react';
import { Shield, X, Check } from 'lucide-react';

export default function InsuranceModal({ isOpen, onClose, itemPrice, onSelectPlan }) {
  if (!isOpen) return null;

  const insurancePlans = [
    {
      id: 'basic',
      name: 'Basic Protection',
      coverage: 'Damage during shipping',
      price: itemPrice * 0.05,
      features: ['Shipping damage', 'Loss during transit', '30-day coverage']
    },
    {
      id: 'standard',
      name: 'Standard Protection',
      coverage: 'Extended coverage',
      price: itemPrice * 0.08,
      features: ['Shipping damage', 'Loss during transit', '90-day coverage', 'Accidental damage']
    },
    {
      id: 'premium',
      name: 'Premium Protection',
      coverage: 'Full coverage',
      price: itemPrice * 0.12,
      features: ['All standard features', '1-year coverage', 'Theft protection', '24/7 support']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl rounded-lg bg-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Shield className="mr-2 text-emerald-400" />
            Insurance Options
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insurancePlans.map((plan) => (
            <div 
              key={plan.id}
              className="rounded-lg bg-gray-700 p-4 hover:bg-gray-600 cursor-pointer"
              onClick={() => onSelectPlan(plan)}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-emerald-400 text-xl font-bold mb-4">
                CHF {plan.price.toFixed(2)}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <Check className="h-4 w-4 mr-2 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="mt-4 w-full rounded-md bg-emerald-400 py-2 text-black hover:bg-emerald-500"
                onClick={() => onSelectPlan(plan)}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 