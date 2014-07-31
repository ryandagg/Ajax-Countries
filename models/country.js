var  mongoose = require("mongoose");
var Country = mongoose.model("Country", {
	name: String,
	frenchName: String,
	localName: String,
	region: String,


})

// var newCountry = new Country ({
// 	questions: a
// })


module.exports = Country;