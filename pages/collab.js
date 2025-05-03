// pages/collab.js
import { useState } from "react";

export default function Collaboration() {
  const [sharedNote, setSharedNote] = useState("");

  const handleNoteChange = (e) => {
    setSharedNote(e.target.value);
    // In real-time scenario, broadcast changes over WebSocket or p2p
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Collaboration
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        Work together on documents, chat with each other, or hop on a live call.
      </p>

      <div className="mt-4 p-4 bg-white rounded shadow dark:bg-gray-800 max-w-xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Shared Note
        </h3>
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={sharedNote}
          onChange={handleNoteChange}
          placeholder="Type here; changes broadcast to other collaborators..."
        />
      </div>
    </div>
  );
}
