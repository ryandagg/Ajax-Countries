var mongoose = require("mongoose");
var Country = require("../models/Country")

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	countries: function(req, res) {
		// console.log("countries:", countries) //test if file loaded properly.
		// res.send(countries);
		Country.find({}, function(err, data){
			if(err){
				console.log("err:", err)
			}else{
				// console.log("success")
				res.send(data);
			}
		})
	}
};

module.exports = indexController;

