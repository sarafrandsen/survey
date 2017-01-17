$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var movieInput = $("input#movie").val();
    var dogsvcatsInput = $("input#dogs-v-cats").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".movie").text(movieInput);
//???????????????????????????????????
    $(".dogs-v-cats").text(dogsvcatsInput);

    $("#results").show();

    event.preventDefault();
  });
});
