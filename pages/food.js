import { useEffect, useState } from "react";

export default function FoodDelivery() {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    restaurantId: "",
    orderDetails: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch available restaurants
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({ userId: "", restaurantId: "", orderDetails: "" });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Place a Food Order</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={formData.userId}
          onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
          required
        />
        <textarea
          placeholder="Order Details"
          value={formData.orderDetails}
          onChange={(e) =>
            setFormData({ ...formData, orderDetails: e.target.value })
          }
          required
        />
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <input
                type="radio"
                name="restaurant"
                value={restaurant.id}
                onChange={() =>
                  setFormData({ ...formData, restaurantId: restaurant.id })
                }
              />{" "}
              {restaurant.name} ({restaurant.cuisine})
            </li>
          ))}
        </ul>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
