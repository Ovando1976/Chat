// pages/rideshare.js

import { useState } from "react";

export default function RidesharePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [rides, setRides] = useState([]);

  const handleRequest = () => {
    if (!pickup || !dropoff) return;
    setRides((prev) => [...prev, { pickup, dropoff }]);
    setPickup("");
    setDropoff("");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Rideshare
      </h2>
      <div className="mt-4 p-4 bg-white rounded shadow dark:bg-gray-800 max-w-xl">
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <input
            type="text"
            placeholder="Dropoff Location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            onClick={handleRequest}
            className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Request Ride
          </button>
        </div>

        {/* Display Rides */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Requested Rides
          </h3>
          {rides.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No rides requested yet.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {rides.map((r, i) => (
                <li
                  key={i}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200"
                >
                  <p>
                    <strong>Pickup:</strong> {r.pickup}
                  </p>
                  <p>
                    <strong>Dropoff:</strong> {r.dropoff}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}