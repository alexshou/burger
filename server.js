var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);


// app.get("/", function(req, res) {
//   burgerConnection.query("SELECT * FROM burgers WHERE devoured = 0", function(err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//     res.render("index", { burgers: data });

//   });
// });

// app.post("/", function(req, res) {

//   const insertQuery = "INSERT INTO burgers ( burger_name, devoured, date ) VALUES (?, ?, ?)";
//   burgerConnection.query(insertQuery, [req.body.burger_name, false, '2017-07-29 09:01:54'], function(err, result) {
//   console.log(req.body)
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// app.delete("/:id", function(req, res) {

//   burgerConnection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

// app.put("/", function(req, res) {
//   burgerConnection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.plan, req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

