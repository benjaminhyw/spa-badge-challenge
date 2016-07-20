$(document).ready( function() {
// INDEX
getTeachers();
getTeacher();
vote();
addBadge();

function teachersTemplate(response){
  var teachersTemplateScript = $("#teachers_template").html();
  var teachersTemplate = Handlebars.compile(teachersTemplateScript);
  var context = {
    data: response
  }
  var render = teachersTemplate(context);
    $('#main').html(render);
}

function getTeachers() {
  $('body').on('click', '#teacher-list', function(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://sample-badges-api.herokuapp.com/teachers",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      teachersTemplate(response);
    });
  });
};

function teachersBadgesTemplate(response){
  var teachersBadgesTemplateScript = $("#badges_template").html();
  var teachersBadgesTemplate = Handlebars.compile(teachersBadgesTemplateScript);
  var context = {
    data: response
  }
  var render = teachersBadgesTemplate(context);
    $('#main').html(render);
}

function getTeacher() {
$('body').on('click', '#badges', function(event) {
  event.preventDefault();
  var teacherID = $(this).closest("li").attr('id');
  $.ajax({
    method: "GET",
    url: "http://sample-badges-api.herokuapp.com/teachers/" + teacherID,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    teachersBadgesTemplate(response)
  });
});
};

function vote() {
$('.test').on('click', 'button', function(event) {
  event.preventDefault();
  var currentBadgeID = $(this).attr('class').value()
  console.log(currentBadgeID)
  var voteType = $(this).attr('class');
  var voteData = '{"vote": {"id": "' + currentBadgeID + '", "vote_type": "' + voteType + '"}}'
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
  var currentBadgeID = $(this).closest('div').parent().attr('id');
  var voteType = $(this).attr('class');

  // var badgeData = $(this).closest('form').serialize();
  var badgeData = '{"badge": {"phrase": "' + currentBadgeID + '", "vote_type": "' + voteType + '"}}'
  // we'll iterate on this tomorrow
  // var badgeData = JSON.stringify(badgeData);
  $.ajax({
    method: "POST",
    url: "http://sample-badges-api.herokuapp.com/badges",
    data: badgeData,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    // this needs to add the badge to the "owner's page"
  });
});
};

});

