// npm init -y; npm install express; npm install multer
//NOTE: INCLUDE 'START' IN THE PACKAGE.JSON FILE


// REQUIRE THE EXPRESS AND MULTER PACKAGES
// Load the Express package as a module
const express = require("express");
// Access the exported service
const app = express();

// Load the Multer package as a module
const multer = require("multer");
// Access the exported service
const upload = multer();



// NOTE: TELLS INDEX.JS WHERE TO LOOK TO ACCESS FILES
// Serve content of the "public" and "css" subfolders directly
app.use(express.static("public"));
app.use(express.static("css"));



// NOTE: CREATE YOUR LISTENER
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});



// Enable Cross Origin Resource Sharing (CORS) (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



// Return the index.html for requests to the root URL ("/")
app.get("/", (request, response) => {
  //response.send("Hello from Express!");
  response.sendFile(`${__dirname}/views/index.html`);
  });


// GET & POST FOR EX1
// Return a web page for requests to "/ex1"
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
  });

// Route to process the form submission (POST request)
app.post("/ex1", upload.array(), (request, response) => {
  console.log(request.body);

  const name = request.body.name;
  const email = request.body.email;

  response.send(`${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`);
});

     



// Return a web page for requests to "/ex2"
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
  });

  // Return a web page for requests to "/ex3"
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
  });

