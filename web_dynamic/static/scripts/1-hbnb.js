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
