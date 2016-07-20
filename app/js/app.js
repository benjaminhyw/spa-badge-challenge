$(document).ready( function() {
// INDEX

function getTeachers() {
$('body').on('click', '#teacher-list', function(event) {
  event.preventDefault();
  $.ajax({
    method: "GET",
    url: "http://sample-badges-api.herokuapp.com/teachers",
    dataType: "json"
  }).done(function(response){
    console.log(response);
    // use template to format and display or something?
  });
});
};

function getTeacher() {
$('body').on('click', '#teacher', function(event) {
  event.preventDefault();
  var teacherID = $(this).attr('id');
  $.ajax({
    method: "GET",
    url: "http://sample-badges-api.herokuapp.com/teachers/" + teacherID,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    // use template to format and display or something?
  });
});
};

// SAMPLE PAGE


function vote() {
$('.slogan').on('click', 'button', function(event) {
  event.preventDefault();
  var currentBadgeID = $(this).closest('div').parent().attr('id');
  var voteType = $(this).attr('class');
  var voteData = '{"vote": {"id": "' + badgeID + '", "vote_type": "' + voteType + '"}}'
  console.log(voteData);
  $.ajax({
    method: "PUT",
    url: "http://sample-badges-api.herokuapp.com/badges/" + currentBadgeID,
    data: voteData,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    // should get success back here
  });
});
};

function addBadge() {
$('.add-badge').on('click', 'input[type="image"]', function(event) {
  event.preventDefault();
  var badgeData = $(this).closest('form').serialize();
  // var badgeData = '{"badge": {"phrase": "' + currentBadgeID + '", "vote_type": "' + voteType + '"}}'
  // we'll iterate on this tomorrow
  var badgeData = JSON.stringify(badgeData);
  $.ajax({
    method: "POST",
    url: "http://sample-badges-api.herokuapp.com/badges"
    data: badgeData,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    // this needs to add the badge to the "owner's page"
  });
});
};

});

