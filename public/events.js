const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('event-list');

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const title = document.getElementById('event-title').value;
  const description = document.getElementById('event-description').value;
  const date = document.getElementById('event-date').value;
  const location = document.getElementById('event-location').value;
  
  fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, date, location })
  })
  .then(response => response.json())
  .then(event => {
    addEventToList(event);
    eventForm.reset();
  })
  .catch(error => console.error('Error:', error));
});

const addEventToList = (event) => {
  const li = document.createElement('li');
  li.textContent = `${event.title} - ${event.description} (Date: ${event.date}, Location: ${event.location})`;
  eventList.appendChild(li);
};

// Fetch and display existing events
fetch('/api/events')
  .then(response => response.json())
  .then(events => {
    events.forEach(addEventToList);
  });
