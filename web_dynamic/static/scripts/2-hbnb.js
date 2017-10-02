$(document).ready(function () {
  let amenList = [];
  $('INPUT[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      amenList.push($(this).attr('data-id'));
    } else {
      for (let i = 0; i < amenList.length; i++) {
        if ($(this).attr('data-id') === amenList[i]) {
          delete amenList[i];
        }
      }
    }
    $('.amenities h4').text($(this).attr('data-name'));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
