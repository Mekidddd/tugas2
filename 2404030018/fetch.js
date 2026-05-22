fetch('data.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('email').textContent = data.email;

  })
  .catch(error => {
    console.log('Error:', error);
  });