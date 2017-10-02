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
