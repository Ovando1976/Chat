// Mock boat data
const boats = [
  { id: 1, name: "Luxury Yacht", price: 1000 },
  { id: 2, name: "Sailing Boat", price: 500 },
  { id: 3, name: "Speedboat", price: 300 },
];

let bookings = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the list of boats
    res.status(200).json(boats);
  } else if (req.method === "POST") {
    const { boatId, userId, date } = req.body;

    // Find the boat
    const boat = boats.find((b) => b.id === parseInt(boatId));
    if (!boat) {
      return res.status(404).json({ message: "Boat not found" });
    }

    // Process booking
    bookings.push({ boatId, userId, date });
    res.status(200).json({ message: `Boat ${boat.name} booked successfully!` });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: "Method not allowed" });
  }
}
