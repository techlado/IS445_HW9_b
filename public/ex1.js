// NOTE: ADD AN EVENT LISTENER FOR FORM SUBMIT
document.querySelector("form").addEventListener("submit", e => {
  //PREVENT DEFAULT BEHAVIOR
  e.preventDefault();
  
  // //TEST
  // document.getElementById("confirmation").textContent = "Testing";
  
  
  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);
  
  
  // Send form data to the server with an asynchronous POST request
  fetch("/ex1", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("confirmation").textContent = result;
    })
    .catch(err => {
      document.getElementById("confirmation").textContent = err.message;
    });
});