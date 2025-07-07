import React from 'react';

const DataCard = ({ title, value, source, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-brand-red">{title}</h3>
      <p className="text-2xl my-2">{value}</p>
      <p className="text-sm text-gray-500">Fonte: {source}</p>
      <button 
        onClick={onClick}
        className="mt-2 bg-brand-red text-white py-1 px-3 rounded"
      >
        Ver Detalhes
      </button>
    </div>
  );
};