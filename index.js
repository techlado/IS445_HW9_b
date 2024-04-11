// Load the Express package as a module
const express = require("express");
// Access the exported service
const app = express();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve content of the "public" and "css" subfolders directly
app.use(express.static("public"));
app.use(express.static("css"));

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));


// Return the index.html for requests to the root URL ("/")
app.get("/", (request, response) => {
  //response.send("Hello from Express!");
  response.sendFile(`${__dirname}/views/index.html`);
  });

// Route to display the form (GET request)
app.get('/myForm', (req, res) => {
  res.sendFile(__dirname + '/ex1.html');
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

/////////////////////////////////////////////////////////////////////////////
//          RESOURCES        RESOURCES       RESOURCES         RESOURCES     
/////////////////////////////////////////////////////////////////////////////      

// Return a web page for requests to "/ex1"
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
  });

// Return a web page for requests to "/ex2"
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
  });

  // Return a web page for requests to "/ex3"
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
  });



/////////////////////////////////////////////////////////////////////////////
//          END RESOURCES        END RESOURCES       END RESOURCES              
///////////////////////////////////////////////////////////////////////////// 


// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

