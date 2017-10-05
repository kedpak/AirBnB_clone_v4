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

  $('button').click(function () {
    $('.places').empty();

    postAmen();
  });
  postAmen();

  function postAmen () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: '{"amenities": amenList}',
      dataType: 'json',
      headers: {'Content-Type': 'application/json'},
      success: function (data) {
       //#for (let j = 0; j < data.length; j++) {
        //  for (let k = 0; k < nameList.length; k++) {
         //   if (data[j].name === nameList[k]) {
          //    delete data[j];
           // }
         // }
       // }
        for (let i = 0; i < data.length; i++) {
          const htmlStruct = [
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
          $(htmlStruct.join('')).appendTo('.places');
        }
      }
    });
  }
});
