let events = []; // In-memory event storage

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return the list of events
    res.status(200).json(events);
  } else if (req.method === 'POST') {
    // Create a new event
    const { title, description, date, location } = req.body;
    const newEvent = { title, description, date, location };
    events.push(newEvent);
    res.status(201).json(newEvent);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}