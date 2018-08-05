$(document).ready(function() {
	$("#submit").click(function(e){
		
		var username = $("#username").val();
		alert(username);
		e.preventDefault();

		// $.ajax({
		// 	method: "POST",
		// 	url: "test.json",
		// 	data: {
		// 		username : username
		// 	},
		// 	sucess:function(){
		// 		alert("Sent username sucessfully");
		// 	},
		// 	error:function(){
		// 		alert("Failed");
		// 	}

		// })
	})
});