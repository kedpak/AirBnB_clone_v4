$(document).ready(function () {
  let amenList = [];
  let nameList = [];
  $('INPUT[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      amenList.push($(this).attr('data-id'));
      nameList.push($(this).attr('data-name'));
    } else {
      for (let i = 0; i < amenList.length; i++) {
        if ($(this).attr('data-id') === amenList[i]) {
          delete amenList[i];
          delete nameList[i];
        }
      }
    }
    $('.amenities h4').text(nameList);
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });



  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    headers: {'Content-Type': 'application/json'},
    success: function (data) {
      for (let i in data) {
	  console.log(data[i].description)
	  $('<article>').appendTo('.places')
          $('<div class="title">').appendTo('.container .places article')
          $('<h2>' + data[i].name + '</h2>').appendTo('.title')
	  $('<div class="price_by_night">' + '$' + data[i].price_by_night + '</div>').appendTo('.title')
          $('</div>').appendTo('.price_by_night')
	  $('</div>').appendTo('.title')
	  $('<div class="information">').appendTo('.container .places article')
	  $('<div class="max_guest">').appendTo('.information')
	  $('<i class="fa fa-users fa-3x" aria-hidden="true"></i>').appendTo('.max_guest')
	  $('<div>' + data[i].max_guest + " Guests</div>").appendTo('.max_guest')
	  $('</div>').appendTo('.max_guest')
	  $('<div class="number_rooms">').appendTo('.information')
	  $('<i class="fa fa-bed fa-3x" aria-hidden="true"></i>').appendTo('.number_rooms')
	  $('<div>' + data[i].number_rooms + " Bedrooms </div>").appendTo('.number_rooms')
	  $('</div>').appendTo('.number_rooms')
	  $('<div class="number_bathrooms">').appendTo('.information')
	  $('<i class="fa fa-bath fa-3x" aria-hidden="true"></i>').appendTo('.number_bathrooms')
	  $('<div>' + data[i].number_bathrooms + " Bathroom</div>").appendTo('.number_bathrooms')
	  $('</div>').appendTo('.number_bathrooms')
	  $('</div>').appendTo('.container .places article')
	  $('<div class="description">').appendTo('.container .places article ')
	  $('<div>' + data[i].description +'</div>').appendTo('.description')
          $('</div>').appendTo('.container .places article')
	  $('</article>').appendTo('.places')
      }
    }
}); 
});
