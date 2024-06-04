document.getElementById('ask-knowledge-base').addEventListener('click', () => {
  const question = document.getElementById('knowledge-question').value;

  fetch('/api/ask-tour-guide', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question })
  })
  .then(response => response.json())
  .then(data => {
    const answer = data.answer;
    document.getElementById('knowledge-answer').innerText = answer;
  })
  .catch(error => console.error('Error:', error));
});
