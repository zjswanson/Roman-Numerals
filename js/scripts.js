// back end logic

var test = "2963";
var romanNumerals = ["I","V","X","L","C","D","M"];

var buildTestArray = function(string){
  var testArray = string.split("");
  return testArray.map(function(numeral) {
    return parseInt(numeral);
  });
};




var writeNumeral = function(number,place){
  var numeral = "";
  if (number<=3) {
    for (var i=0;i<number;i+=1) {
      numeral = numeral + romanNumerals[place]
    }
  } else if (number === 4) {
    numeral = romanNumerals[place]+romanNumerals[place+1]
  } else if ((number>4) && (number<9)) {
    numeral = romanNumerals[place+1];
    for (var i=0;i<(number-5);i+=1) {
      numeral = numeral + romanNumerals[place]
    }
  } else if (number === 9) {
    numeral = romanNumerals[place]+romanNumerals[place+2];
  }
  return numeral;
};

var romanNum = function (string) {
  var numArray = buildTestArray(string);
  var numArray = numArray.reverse();
  var place = 0;
  var output="";
  for (var r=0;r<4;r+=1) {
    output = writeNumeral(numArray[r], place) + output;
    place += 2;
  }
  return output;
};

// UI logic
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var input = $(".number-input").val();
    var output = romanNum(input);
    $("#output").text(output);
  });



});
