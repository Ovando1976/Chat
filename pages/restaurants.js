import { useEffect, useState } from "react";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the list of restaurants
    fetch("/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div>
      <h2>Available Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.cuisine} (
            {restaurant.location}) - {restaurant.priceRange}
          </li>
        ))}
      </ul>
    </div>
  );
}
