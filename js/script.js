
/*search for numbers fact*/
$(document).ready(function(){
    $("#search").click(function(e){
      e.preventDefault();
        var userInput = $("#numberFacts").val();
        $.ajax({
            method: "GET",
            url: `https://cors-anywhere.herokuapp.com/numbersapi.com/${userInput}`,
        })
        .done(function(msg) {
          console.log(msg);
          $("#facts").html(msg);
           $("#numberFacts").val("")
          
        });
    });
});
