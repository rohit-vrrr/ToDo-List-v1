const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var items = ["Eat", "Sleep", "Repeat"];

app.get('/', function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day, newItems: items});
});

app.post('/', function(req, res) {
  item = req.body.newTask;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
