$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();

    $(".name").text(name);

    $("#story").show();

    event.preventDefault();
  });
});
