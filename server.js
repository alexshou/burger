var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");
var burgerConnection = require("./config/connections.js").burger;

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

burgerConnection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + burgerConnection.threadId);

});

app.get("/", function(req, res) {
  burgerConnection.query("SELECT * FROM burgers WHERE devoured = 0", function(err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
    res.render("index", { burgers: data });

  });
});

app.post("/", function(req, res) {

  const insertQuery = "INSERT INTO burgers ( burger_name, devoured, date ) VALUES (?, ?, ?)";
  burgerConnection.query(insertQuery, [req.body.burger_name, false, '2017-07-29 09:01:54'], function(err, result) {
  console.log(req.body)
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.delete("/:id", function(req, res) {
  burgerConnection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.put("/", function(req, res) {
  burgerConnection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.plan, req.body.id], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.listen(port);
