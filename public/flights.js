const flightList = document.getElementById('flight-list');
const flightForm = document.getElementById('flight-form');

flightForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userId = document.getElementById('flight-user-id').value;
  const date = document.getElementById('flight-date').value;
  const flightId = document.querySelector('input[name="flight"]:checked').value;
  
  fetch('/api/flights/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ flightId, userId, date })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    flightForm.reset();
  })
  .catch(error => console.error('Error:', error));
});

// Fetch and display flights
fetch('/api/flights')
  .then(response => response.json())
  .then(flights => {
    flights.forEach(flight => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="radio" name="flight" value="${flight.id}"> ${flight.airline} - ${flight.destination} ($${flight.price})`;
      flightList.appendChild(li);
    });
  });
