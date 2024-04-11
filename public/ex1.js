const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form (GET request)
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/ex4.html');
});

// Route to process the form submission (POST request)
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`
    <h2>Confirmation Message:</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
