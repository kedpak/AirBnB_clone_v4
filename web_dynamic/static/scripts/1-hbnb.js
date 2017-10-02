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
});
