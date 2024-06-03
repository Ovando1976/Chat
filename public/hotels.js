const hotelList = document.getElementById('hotel-list');
const hotelForm = document.getElementById('hotel-form');

hotelForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userId = document.getElementById('hotel-user-id').value;
  const date = document.getElementById('hotel-date').value;
  const hotelId = document.querySelector('input[name="hotel"]:checked').value;
  
  fetch('/api/hotels/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ hotelId, userId, date })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    hotelForm.reset();
  })
  .catch(error => console.error('Error:', error));
});

// Fetch and display hotels
fetch('/api/hotels')
  .then(response => response.json())
  .then(hotels => {
    hotels.forEach(hotel => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="radio" name="hotel" value="${hotel.id}"> ${hotel.name} - ${hotel.location} ($${hotel.price}/night)`;
      hotelList.appendChild(li);
    });
  });
