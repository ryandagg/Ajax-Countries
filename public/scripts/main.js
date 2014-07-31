// console.log("Test!");
// console.log("(typeof $().emulateTransitionEnd == 'function'):", (typeof $().emulateTransitionEnd == 'function'))

$(document).on("ready", function(){
	$("#load-countries").on("click", function(e){
		e.preventDefault();
		$.get("/countries", function(res){
			// console.log(res);
			$("#countries-div").append("<ul id='countries-list'></ul>");
			for(var i = 0; i < res.length; i++){
				$("#countries-list").append("<li>"+ res[i].name + "</li>" +
					"<ul>" +
						"<li>local name: " + res[i].localName + "</li>" +
						"<li>French name: " + res[i].frenchName + "</li>" +
						"<li>region: " + res[i].region + "</li>" +
					"</ul>"
				);
			}
		})
	})

})
