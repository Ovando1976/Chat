import { useEffect, useState } from "react";

export default function FlightBooking() {
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    date: "",
    flightId: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch available flights
    fetch("/api/flights")
      .then((response) => response.json())
      .then((data) => setFlights(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/flights", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({ userId: "", date: "", flightId: "" });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Book a Flight</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={formData.userId}
          onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              <input
                type="radio"
                name="flight"
                value={flight.id}
                onChange={() =>
                  setFormData({ ...formData, flightId: flight.id })
                }
              />{" "}
              {flight.name} to {flight.destination} (${flight.price})
            </li>
          ))}
        </ul>
        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
}
