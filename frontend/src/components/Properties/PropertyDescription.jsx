import React from 'react';

export default function PropertyDescription({ description }) {
  return (
    <div className="prose prose-gray max-w-none bg-gray-800">
      <p className="text-gray-100">{description}</p>
    </div>
  );
}

