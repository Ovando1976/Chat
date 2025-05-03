// pages/explore.js
import { useState } from "react";

export default function Explore() {
  const [search, setSearch] = useState("");
  const trendingTopics = ["AI Art", "Next.js", "ChatGPT", "Web3", "Crypto"];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // Potentially trigger real search or filter
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Explore
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Discover what’s trending or search for specific content.
      </p>

      <div className="mt-4 max-w-md">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Search topics..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Trending Topics
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <li
              key={topic}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded dark:bg-gray-700 dark:text-gray-100"
            >
              #{topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
