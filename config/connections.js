const Promises = require('bluebird');
const MySQL = require('mysql');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

if(process.env.JAWSDB_URL) {
	connection = MySQL.createConnection(process.env.JAWSDB_URL);
} else {
connection = MySQL.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "burgers_db"
});
}

let allConnections = {
	'burger' : connection
};

module.exports = allConnections;

// mysql://b38df6daa5ddb2:5154e53b@us-cdbr-iron-east-05.cleardb.net/heroku_7f58e5ffafab8cd?reconnect=true

	// host: "localhost",
	// port: 3306,
	// user: "root",
	// password: "",
	// database: "burgers_db"