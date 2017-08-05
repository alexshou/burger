const Promises = require('bluebird');
const MySQL = require('mysql');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = MySQL.createConnection({
	host: "us-cdbr-iron-east-05.cleardb.net",
	port: 3306,
	user: "b38df6daa5ddb2",
	password: "5154e53b",
	database: "heroku_7f58e5ffafab8cd"
});

let allConnections = {
	'burger' : connection
};

module.exports = allConnections;

// mysql://b38df6daa5ddb2:5154e53b@us-cdbr-iron-east-05.cleardb.net/heroku_7f58e5ffafab8cd?reconnect=true