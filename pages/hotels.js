import { useEffect, useState } from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import styles from "../styles/Hotels.module.css"; // Custom CSS for captivating design

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    hotelId: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch available hotels
    fetch("/api/hotels")
      .then((response) => response.json())
      .then((data) => setHotels(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({ userId: "", hotelId: "", date: "" });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book Your Dream Stay</h1>

      {message && <p className={styles.successMessage}>{message}</p>}

      <div className={styles.hotelGrid}>
        {hotels.map((hotel) => (
          <div key={hotel.id} className={styles.hotelCard}>
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={300}
              height={200}
              className={styles.hotelImage}
            />
            <div className={styles.hotelInfo}>
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
              <p>
                <strong>Location:</strong> {hotel.location}
              </p>
              <p>
                <strong>Price:</strong> ${hotel.price}/night
              </p>
              <button
                className={styles.bookButton}
                onClick={() => setFormData({ ...formData, hotelId: hotel.id })}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bookingForm}>
        <h2>Complete Your Booking</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User ID"
            value={formData.userId}
            onChange={(e) =>
              setFormData({ ...formData, userId: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
