/*generate number*/
function generate(size, lowest, highest) {
    var results = [];
    for(var i = 0; i < size; i++) {
      var add = true;
      var randomNumber = Math.floor(Math.random() * highest) + 1;
      for(var y = 0; y < highest; y++) {
        if(results[y] == randomNumber) {
          add = false;
        }
      }
      if(add) {
        results.push(randomNumber);
      } else {
        i--;
      }
    }
    
    var highestNumber = 0;
    for(var m = 0; m < results.length; m++) {
      for(var n = m + 1; n < results.length; n++) {
        if(results[n] < results[m]) {
          highestNumber = results[m];
          results[m] = results[n];
          results[n] = highestNumber;
        }
      }
    }
    
    document.getElementById("results").innerHTML = results.join(" ");
  };
  