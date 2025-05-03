import { useState, useEffect } from 'react';

export default function Boats() {
  const [boats, setBoats] = useState([]); // State to hold available boats
  const [formData, setFormData] = useState({ userId: '', date: '', boatId: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the list of available boats when the component mounts
    fetch('/api/boats')
      .then((response) => response.json())
      .then((data) => setBoats(data))
      .catch((error) => console.error('Error fetching boats:', error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Submit the booking request
    fetch('/api/boats/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({ userId: '', date: '', boatId: '' }); // Reset form after submission
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Book a Boat</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleFormSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={formData.userId}
            onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Select a Boat:
          <ul>
            {boats.map((boat) => (
              <li key={boat.id}>
                <label>
                  <input
                    type="radio"
                    name="boat"
                    value={boat.id}
                    checked={formData.boatId === boat.id.toString()}
                    onChange={(e) => setFormData({ ...formData, boatId: e.target.value })}
                  />
                  {boat.name} (${boat.price})
                </label>
              </li>
            ))}
          </ul>
        </label>
        <br />
        <button type="submit">Book Boat</button>
      </form>
    </div>
  );
}