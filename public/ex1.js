// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.getElementById('myForm');

//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
    
//     // Get form data
//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const email = formData.get('email');
    
//     // Send form data to server
//     fetch('/submit', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//       // Display confirmation message from server
//       document.getElementById('confirmation').innerHTML = data;
//     })
//     .catch(error => console.error('Error:', error));
//   });
// });
