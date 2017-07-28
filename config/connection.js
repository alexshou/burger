const Promises = require('bluebird');
const MySQL = require('mysql');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let connection = MySQL.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "45jia323",
	database: "burgers_db"
});

let allConnections = {
	'burger' : connection
};

module.exports = allConnections;