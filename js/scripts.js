

function pigLatin(userInput){
  var processedUserInput = ("");
  if ((userInput === "a") || (userInput === "e") ||(userInput === "i") || (userInput === "o") ||(userInput === "u")){
    processedUserInput = (userInput + "way");
  }
  else if ((userInput !== "a") || (userInput !== "e") ||(userInput !== "i") || (userInput !== "o") ||(userInput !== "u")){
    processedUserInput = ((userInput.substr(1,userInput.length)+userInput.substr(0,1)) + "ay");
  }

  console.log(processedUserInput)

}



//Front end
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#input").val();
    var result = pigLatin(userInput);


    $(".output").text(result);




    $("#result").show();
  });
});
