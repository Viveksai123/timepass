import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white p-4">
      <h2 className="text-4xl font-bold animate__animated animate__fadeIn">404 - Not Found</h2>
      <p className="mt-4 text-lg">The page you are looking for does not exist.</p>
      <button 
        onClick={handleHomeNavigate} 
        className="mt-6 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        aria-label="Go back to Home"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
