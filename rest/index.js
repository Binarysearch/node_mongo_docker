
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');




let router = express.Router();
router.get('/', function (req, res) {
   mongoose.connect(`mongodb://mongonombreservicio/default`).then(() => {
      res.json({
         status: 'API Its Working',
         message: 'Database connected!!!',
      });
   })
   .catch(err => {
      res.json({
         status: 'API Its Working',
         message: 'Database connected!!!',
      });
   });
});





let app = express();

app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());

app.use('/', router)

var port = process.env.PORT || 8080;
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
