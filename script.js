
/*search for numbers fact*/

$(document).ready(function(){
  $("#search").click(function(e){
    e.preventDefault();
      var userInput = $("#numberFacts").val();
      $.ajax({
          method: "GET",
          url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${userInput}/math`,
          
      })
      .done(function(msg) {
        console.log(msg);
        $("#math").html(msg);
         $("#numberFacts").val("")
        
      });
      $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${userInput}/trivia`,
        
      })
      .done(function(msg) {
        console.log(msg);
        $("#trivia").html(msg);
         $("#numberFacts").val("")
      
      });
      $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${userInput}/date`,
      
      })
      .done(function(msg) {
        console.log(msg);
        $("#date").html(msg);
         $("#numberFacts").val("")
    
      });
      $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${userInput}/year`,
          
      })
      .done(function(msg) {
        console.log(msg);
        $("#year").html(msg);
         $("#numberFacts").val("")
        
      });
      .ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${-userInput}/year`,
          
      })
      .done(function(msg) {
        console.log(msg);
        $("#yearBc").html(msg);
         $("#numberFacts").val("")
        
      });
  });
});