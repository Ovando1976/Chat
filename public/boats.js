const boatList = document.getElementById('boat-list');
const boatForm = document.getElementById('boat-form');

boatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userId = document.getElementById('boat-user-id').value;
  const date = document.getElementById('boat-date').value;
  const boatId = document.querySelector('input[name="boat"]:checked').value;
  
  fetch('/api/boats/book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ boatId, userId, date })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    boatForm.reset();
  })
  .catch(error => console.error('Error:', error));
});

// Fetch and display boats
fetch('/api/boats')
  .then(response => response.json())
  .then(boats => {
    boats.forEach(boat => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="radio" name="boat" value="${boat.id}"> ${boat.name} ($${boat.price})`;
      boatList.appendChild(li);
    });
  });
