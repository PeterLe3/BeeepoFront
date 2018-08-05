$(document).ready(function(){
	alert(window.location.href)
	$("#submit").click(function(e){
		var username = $("#username").val();
		var password = $("#password").val();
		alert(username);
		alert(password);
		e.preventDefault();

		alert(window.location.href + "../test.json");
		$.ajax({
			method: "POST",
			url: window.location.href + "../test.json",
			
			data: {
				username: username,
				password: password
			},
			sucess:function(){
				alert("Sucessfully sent");
			},
			error:function(){
				alert("ERROR");
			}
		})
		//alert(window.location.href)
	})
});