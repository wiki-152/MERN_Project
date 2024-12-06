import React from 'react';

export default function PropertyDescription({ description }) {
  return (
    <div className="prose prose-gray max-w-none">
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

