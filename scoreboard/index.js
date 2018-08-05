$(document).ready(function(){

   // jQuery methods go here..
   function addTable() 
   {
	   var td =  "<tr> <td> user </td>" +
	   			"<td> score </td>" +
	   			"</tr";
	   for( var i = 0; i < 10; i++)
	   {
	   		$("#table").append(td);
	   }
   
   }
   	$.ajax({
   		url: "dummy.json", 
   		type: "GET",
   		dataType: "json"
   		success: function(result){
     
        }});
});