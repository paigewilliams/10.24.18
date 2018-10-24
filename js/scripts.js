

function pigLatin(userInput){
  var processedUserInput = ("");
  if ((userInput.charAt(0) === "a") || (userInput.charAt(0) === "e") ||(userInput.charAt(0) === "i") || (userInput.charAt(0) === "o") ||(userInput.charAt(0) === "u")){
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
