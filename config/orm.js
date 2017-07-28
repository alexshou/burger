const Inquirer = require('inquirer');
const burgerConnection = require('./config/connections.js').burger;

burgerConnection.connect(function(err){
	// Handle the error if there is one!
	if( err ) throw err;
});
function selectAll(){

}
 
function insertOne(){

}

function updateOne(){

}

module.exports = orm;