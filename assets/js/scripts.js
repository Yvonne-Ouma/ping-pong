$(document).ready(function() {
  $("form#PingPong").submit(function(event) {
    event.preventDefault();
    var number =parseInt($("input#number").val());
    var result = PingPong(number);
    $("#result").text(result);
  })
})
 var PingPong = function(ping) {
   if((ping%3) === 0 && (ping%5) === 0) {
     return "PingPong"
   }
  else
  if((ping%5) === 0) {
    return "pong"
  }
  else
  if((ping%3) === 0) {
    return "ping"
  }
  else {
    return (ping)
  }

  for (ping = 0; ping <= 200; ping+=PingPong) {
      return (ping)
  }
 };


 // USER INTERFACE LOGIC
 // $(document).ready(function() {
 //   $("form#PingPong").submit(function(event) {
 //     $("#result").empty();
 //
 //
 //     var number = parseInt($("input#number").val());
 //     var array = output(number);
 //     array.forEach(function(aftermath) {
 //       $("#result").append("<li>" + aftermath + "</li>");
 //       event.preventDefault();
 //     });
 //
 //   });
 // });
