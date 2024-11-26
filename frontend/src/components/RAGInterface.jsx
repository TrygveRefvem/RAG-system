import React, { useState, useEffect } from 'react';
import { Upload, Globe, Search, Trash2, MessageSquare } from 'lucide-react';

const RAGInterface = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/documents');
      const data = await response.json();
      setDocuments(data.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Document Upload */}
        <div className="p-4 border rounded">
          <h2 className="text-lg font-bold mb-4">Last opp dokument</h2>
          {/* Upload form will go here */}
        </div>

        {/* URL Addition */}
        <div className="p-4 border rounded">
          <h2 className="text-lg font-bold mb-4">Legg til URL</h2>
          {/* URL form will go here */}
        </div>
      </div>

      {/* Document List */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold mb-4">Dokumenter</h2>
        {/* Document list will go here */}
      </div>

      {/* Chat Interface */}
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold mb-4">Chat</h2>
        {/* Chat interface will go here */}
      </div>
    </div>
  );
};

export default RAGInterface;
