//Back end
pigLatin = function(phrase) {
  console.log(phrase)
  var stringToArray = phrase.split(" ");
  console.log(stringToArray)

alert("test");
function identifyFirstCharacter(array) {
  var firstCharacter = pigLatin(array).val();
  console.log(firstCharacter)
  // firstCharacter.join(stringToArray)
}
}










//Front end
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#input").val();
    var result = pigLatin(phrase);

    $(".output").text(phrase);




    $("#result").show();
  });
});
