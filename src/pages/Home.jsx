import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen p-6 bg-light flex flex-col">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <p className="text-lg text-gray-700 mb-4">
          This is my starting point for building a modern React application.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          I will customize and extend this template as I build out features.
        </p>
        <div className="text-center">
          <Link
            to="/components"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Component Library
          </Link>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
