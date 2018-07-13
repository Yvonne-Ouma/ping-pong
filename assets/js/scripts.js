$(document).ready(function() {
  $("form#PingPong").submit(function(event) {
    event.preventDefault();
    var number =parseInt($("input#number").val());
    var result = PingPong(number);
    $("#result").text(result);
  })
})
