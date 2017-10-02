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
    console.log(data.length);
    if (data['status'] === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
