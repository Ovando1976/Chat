// pages/knowledge.js
import { useState } from "react";

export default function KnowledgeBase() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    // TODO: Integrate Pinecone or your GPT-based knowledge base
    setResult(`Results for "${query}"...`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        USVI Knowledge Base
      </h2>
      <div className="mt-4 max-w-xl p-4 bg-white rounded shadow dark:bg-gray-800">
        <input
          type="text"
          placeholder="Search the knowledge base..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Search
        </button>
        {result && (
          <div className="mt-4 p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
