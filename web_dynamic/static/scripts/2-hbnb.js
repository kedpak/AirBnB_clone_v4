$(document).ready(function () {
   amenList = []
   $('INPUT[type=checkbox]').click(function () {
       if ($(this).is(':checked')) {
	      amenList.push($(this).attr('data-id'));
       }
       else {
	      for (let i = 0; i < amenList.length; i++) {
		         if ($(this).attr('data-id') === amenList[i]){
			        delete amenList[i];
			        }
		         }
       }
       console.log(amenList);
       $('.amenities h4').text($(this).attr('data-name'));
   });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
	console.log("TESST")
    });

});
