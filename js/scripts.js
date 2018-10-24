

function pigLatin(userInput){
  var splitUserInput = userInput.split("")
  console.log(splitUserInput)


 for (var i = 0; i < splitUserInput.length; i++){
 var processedUserInput = ("");
   if ((splitUserInput[i].charAt(0) === "a") || (splitUserInput[i].charAt(0) === "e") ||(splitUserInput[i].charAt(0) === "i") || (splitUserInput[i].charAt(0) === "o") ||(splitUserInput[i].charAt(0) === "u")){
     var joinedUserInput = splitUserInput.join('');
     // debugger
     processedUserInput = (joinedUserInput + "way");
   }
   else if ((splitUserInput !== "a") || (splitUserInput !== "e") ||(splitUserInput !== "i") || (splitUserInput !== "o") ||(splitUserInput !== "u")){
     processedUserInput = ((splitUserInput.substr(1,splitUserInput.length)+splitUserInput.substr(0,1)) + "ay");


   }

   console.log(processedUserInput)

 }
}

     // var joinedUserInput = processedUserInput.join('');
// processedUserInput = (splitUserInput + "way");


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
