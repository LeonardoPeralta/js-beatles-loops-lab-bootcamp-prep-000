// add solution here
function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayedBy = [];

for (var i = 0; i < musicians.length; i++) {
      instrumentsPlayedBy.push(musicians[i] + " plays " + instruments[i])
  }
return instrumentsPlayedBy;
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
   var i = 0;

   while (i < facts.length) {
     facts[i] = facts[i] + "!!!";
     i++;
   }
   return facts;
 }
