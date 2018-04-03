//business logic
var numbersToBePingponged = [];

function pingPong(number) {
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      numbersToBePingponged.push("pingpong");
    } else if (index % 5 === 0) {
      numbersToBePingponged.push("pong");
    } else if (index % 3 === 0) {
      numbersToBePingponged.push("ping");
    } else {
      numbersToBePingponged.push(index);
    }
  }
}

//username interfacelogic

$(document).ready(function() {
  $("form#pingpong").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    pingPong(number);

    numbersToBePingponged.forEach(function(number) {
      $("#output").append('<li>' + number + '</li>');
    });
  });
});