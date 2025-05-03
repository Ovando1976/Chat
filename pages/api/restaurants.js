let restaurants = [
  {
    id: 1,
    name: "Restaurant A",
    cuisine: "Italian",
    location: "Downtown",
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Restaurant B",
    cuisine: "Mexican",
    location: "Uptown",
    priceRange: "$",
  },
];

let orders = []; // Store food orders in memory for now

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the list of restaurants
    res.status(200).json(restaurants);
  } else if (req.method === "POST") {
    const { userId, restaurantId, orderDetails } = req.body;

    // Find the restaurant
    const restaurant = restaurants.find((r) => r.id === parseInt(restaurantId));

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Add order to in-memory store
    const newOrder = {
      userId,
      restaurantId,
      orderDetails,
      restaurantName: restaurant.name,
    };
    orders.push(newOrder);

    res
      .status(200)
      .json({ message: `Order placed at ${restaurant.name} successfully!` });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
