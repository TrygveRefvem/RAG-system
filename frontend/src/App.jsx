import React from 'react';
import RAGInterface from './components/RAGInterface';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            RAG System
          </h1>
        </div>
      </header>
      <main>
        <RAGInterface />
      </main>
    </div>
  );
};

export default App;
