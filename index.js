$( document ).ready(function() {
	$('#text').hide();
	$('#beepo').hide();
	$('#beepo').delay(3000).fadeIn(1000);
	$('#beepo').delay(8000).fadeOut(1500);
 	$('#text').delay(12000).fadeOut(1500);




	$('#beepo').click(function() {
		$('#text').show();


	 })
	// $("#enterSong").submit(function(event) { 
	// 	var song = $('#text').val();
	// 	var userID = 1;
	// 	$.ajax({
	// 		method: "POST",
	// 		url: "marksurl",
	// 		data : {

	// 			song : song,
	// 			userID: userID
	// 		},
	// 		success: function() {
	// 			alert("Sucessfully sent song guess from user to server!");
	// 		}
	// 		error: function() {
	// 			alert("Something wrong!");
	// 		}

	// 	})
	// })


	
    
});