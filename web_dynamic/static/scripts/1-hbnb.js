$(document).ready(function () {
    amenList = [];
    if ($('INPUT').is(':checked')) {
      amenList.push(data_id);
    }
    else if ($('INPUT').is(':not(:checked)')) {
      amenList.pop(data_id);
    }
}
