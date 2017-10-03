$(function () {
  $('button').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: '{}',
      dataType: 'json'
      headers: { 'Content-Type': 'application/json' },
      success: function (data) {
    });
  });
});

$(function () {
$.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json'
    headers: { 'Content-Type': 'application/json' },
  success: function (data) {
    for (let i in data) {
      const structure = [
	'<article>',
	'<div class="title">',
	'<h2>' + data[i].name + '</h2>',
	'<div class="price_by_night">' + '$' + data[i].price_by_night + '</div>',
	'</div>',
	'<div class="information">',
	'<div class="max_guest">',
	'<i class="fa fa-users fa-3x" aria-hidden="true"></i>',
	'<br />',
	data[i].max_guest + ' Guests',
	'</div>',
	'<div class="number_rooms">',
	'<i class="fa fa-bed fa-3x" aria-hidden="true"></i>',
	'<br />',
	data[i].number_rooms + ' Bedrooms',
	'</div>',
	'<div class="number_bathrooms">',
	'<i class="fa fa-bath fa-3x" aria-hidden="true"></i>',
	'<br />',
	data[i].number_bathrooms + ' Bathroom',
	'</div>',
	'</div>',
	'<div class="description">',
	data[i].description,
	'</div>',
	'</article>'
      ];
      $(structure.join('')).appendTo('.places');
    }
  }
});

$(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});

$(document).ready(function () {
  $('.amenities input').change(function () {
    let amenities = $('.amenities input');
    let checklist = [];
    let amensChecked = [];
    amenities.each(function () {
      if ($(this).prop('checked')) {
        checklist.push($(this).attr('data-id'));
        amensChecked.push($(this).attr('data-name'));
      }
      $('.amenities h4').text(amensChecked.join(', '));
    });
    console.log(checklist);
  });
});
