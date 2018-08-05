$(document).ready(function(){

   // jQuery methods go here..

   	function addTable() {
   	   var td =  "<tr> <td> ";
   	   var td2 = "</td> <td> ";
   	   var td3 = "</td>" + "<td> ";
   	   var td4 = "</td> " + "</tr>";

	    // var td2 = "</td> <td> user </td>" +
	   	// 		"<td> score </td>" +
	   	// 		"</tr>";

	   	var users = ["Peter", "Andy", "Ryan", "QA", "Brian", "Michelle", "Nick", "Ashley", "Mark", "Emily"];
	   	var scores = [1000, 942, 654, 464, 356, 200, 178, 153, 109, 111];

	   for( var i = 0; i < 10; i++)
	   {
	   		

	   		$("#table").append(td + (i+1) + td2 + users[i] + td3 + scores[i] + td4);
	   }
   	}
   	addTable();
   
   

   	// $.ajax({
   	// 	url: "dummy.json", 
   	// 	type: "GET",
   	// 	dataType: "json"
   	// 	success: function(result){
     
    //     }}); 

});