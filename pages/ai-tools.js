// pages/ai-tools.js
import { useState } from "react";

export default function AITools() {
  const [inputVal, setInputVal] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerateText = async () => {
    // TODO: call your /api/gpt endpoint or similar
    // Demo only:
    setGeneratedText(`AI says: Here's some generated text for "${inputVal}"`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        AI Tools
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Let AI assist you in content creation, summarizing, or any custom tasks.
      </p>

      <div className="mt-4 p-4 bg-white rounded shadow dark:bg-gray-800 max-w-xl">
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter a prompt or text to transform..."
        />
        <button
          onClick={handleGenerateText}
          className="px-4 py-2 mt-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Generate
        </button>

        {generatedText && (
          <div className="mt-4 p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded">
            {generatedText}
          </div>
        )}
      </div>
    </div>
  );
}
