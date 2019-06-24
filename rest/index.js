// FileName: index.js
// Import express
let express = require('express');

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose

let db = require('./database');



let router = express.Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});





// Initialize the app
let app = express();

app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());

app.use('/api', router)

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});