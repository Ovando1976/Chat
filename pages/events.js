import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]); // Holds list of events
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch existing events when the component mounts
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Post the new event data to the server
    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newEvent) => {
        setEvents([...events, newEvent]); // Add new event to state
        setFormData({ title: "", description: "", date: "", location: "" }); // Reset form
        setMessage("Event created successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to create event.");
      });
  };

  return (
    <div>
      <h1>Event Planner</h1>
      {message && <p>{message}</p>} {/* Display success or error message */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Event Title:
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </label>
        <br />
        <label>
          Event Description:
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          ></textarea>
        </label>
        <br />
        <label>
          Event Date:
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Event Location:
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            required
          />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.description} (Date: {event.date}, Location:{" "}
            {event.location})
          </li>
        ))}
      </ul>
    </div>
  );
}
