$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var birthdayInput = $("#birthday").val();

    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var movieInput = $("input#movie").val();
    var dogsCatsChecked = $("input:radio[name=dogs-v-cats]:checked").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".birthday").text(birthdayInput);

    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".movie").text(movieInput);
    $(".dogs-v-cats").text(dogsCatsChecked);
// //???????????????????????????????????

    $("#results").show();

    event.preventDefault();
  });
});
