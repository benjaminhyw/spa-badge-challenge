$(document).ready( function() {
// INDEX
getStudents();
getStudent();
// vote();
// addBadge();

function studentsTemplate(response){
  var studentsTemplateScript = $("#students_template").html();
  var studentsTemplate = Handlebars.compile(studentsTemplateScript);
  var context = {
    data: response
  }
  var render = studentsTemplate(context);
    $('#main').html(render);
}

function getStudents() {
  $('body').on('click', '#student-list', function(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://www.localhost:3000/students",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      studentsTemplate(response);
    });
  });
};

function studentsBadgesTemplate(response){
  var studentsBadgesTemplateScript = $("#badges_template").html();
  var studentsBadgesTemplate = Handlebars.compile(studentsBadgesTemplateScript);
  var context = {
    data: response
  }
  var render = studentsBadgesTemplate(context);
    $('#main').html(render);
}

function getStudent() {
$('body').on('click', '#badges', function(event) {
  event.preventDefault();
  var studentID = $(this).closest("li").attr('id');
  $.ajax({
    method: "GET",
    url: "http://www.localhost:3000/students/" + studentID,
    dataType: "json"
  }).done(function(response){
    console.log(response);
    studentsBadgesTemplate(response)
  });
});
};

// function vote() {
// $('.test').on('click', 'button', function(event) {
//   event.preventDefault();
//   var currentBadgeID = $(this).attr('class').value()
//   console.log(currentBadgeID)
//   var voteType = $(this).attr('class');
//   var voteData = '{"vote": {"id": "' + currentBadgeID + '", "vote_type": "' + voteType + '"}}'
//   console.log(voteData);
//   $.ajax({
//     method: "PUT",
//     url: "http://www.localhost:3000/badges/" + currentBadgeID,
//     data: voteData,
//     dataType: "json"
//   }).done(function(response){
//     console.log(response);
//     // should get success back here
//   });
// });
// };

// function addBadge() {
// $('.add-badge').on('click', 'input[type="image"]', function(event) {
//   event.preventDefault();
//   var currentBadgeID = $(this).closest('div').parent().attr('id');
//   var voteType = $(this).attr('class');

//   // var badgeData = $(this).closest('form').serialize();
//   var badgeData = '{"badge": {"phrase": "' + currentBadgeID + '", "vote_type": "' + voteType + '"}}'
//   // we'll iterate on this tomorrow
//   // var badgeData = JSON.stringify(badgeData);
//   $.ajax({
//     method: "POST",
//     url: "http://www.localhost:3000/badges",
//     data: badgeData,
//     dataType: "json"
//   }).done(function(response){
//     console.log(response);
//     // this needs to add the badge to the "owner's page"
//   });
// });
// };

});

