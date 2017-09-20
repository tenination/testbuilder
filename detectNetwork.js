// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
 // Note: `cardNumber will always be a string
  var firstChar = cardNumber.split('').splice(0,1).join('');
  var firstTwoChars = cardNumber.split('').splice(0,2).join('');
  var firstThreeChars = cardNumber.split('').splice(0,3).join('');
  var firstFourChars = cardNumber.split('').splice(0,4).join('');
  var firstFiveChars = cardNumber.split('').splice(0,5).join('');
  var firstSixChars = cardNumber.split('').splice(0,6).join('');
  var firstSevenChars = cardNumber.split('').splice(0,7).join('');
    
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if ((firstTwoChars === '38'|| firstTwoChars === '39') && cardNumber.length === 14) {
  	return 'Diner\'s Club'; 'Diner\'s Club'
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if ((firstTwoChars === '34'|| firstTwoChars === '37') && cardNumber.length === 15) {
  	return 'American Express';
  } 
  // The Visa network always starts with a 4 and is 13, 16, or 19 digits long
  if (firstChar === '4' && ([16,19].includes(cardNumber.length)) && (!['4903','4905','4911','4936'].includes(firstFourChars))) {
  	return 'Visa';
  } 
  //Visa network starts with 4 and is 13 digits long
  if (firstChar === '4' && cardNumber.length === 13) {
  	return 'Visa';
  } 

  //41234567890123
  //4903, 4905, 4911, 4936

  //Mastercard has a prefix of 51,52,53,54,55 and a length of 16
  if ((firstTwoChars === '51'|| firstTwoChars === '52' || firstTwoChars === '53' || firstTwoChars === '54' || firstTwoChars === '55') && cardNumber.length === 16) {
  	return 'MasterCard';
  } 

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if ((firstFourChars === '6011' || firstThreeChars === '644' || firstThreeChars === '645' 
  	|| firstThreeChars === '646' || firstThreeChars === '647' || firstThreeChars === '648'|| firstThreeChars === '649'
  	|| firstTwoChars === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if ((firstFourChars === '5018' || firstFourChars === '5020' || firstFourChars === '5038' || firstFourChars === '6304') && (cardNumber.length === 16 || [12,13,14,15,16,17,18,19].includes(cardNumber.length))) {
    return 'Maestro';
  }

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if (Number(firstSixChars) >= 622126 && Number(firstSixChars) <= 622925 && [16,17,18,19].includes(cardNumber.length)) {
    return 'China UnionPay';
  }

   //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if (Number(firstThreeChars) >= 624 && Number(firstThreeChars) <= 626 && [16,17,18,19].includes(cardNumber.length)) {
    return 'China UnionPay';
  }

    //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if (Number(firstFourChars) >= 6282 && Number(firstFourChars) <= 6288 && [16,17,18,19].includes(cardNumber.length)) {
    return 'China UnionPay';
  }

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
   if ((firstFourChars === '4903'|| firstFourChars === '4905' || firstFourChars === '4911' || firstFourChars === '4936'|| firstSixChars === '564182'|| firstSixChars === '633110' || firstFourChars === '6333' || firstFourChars === '6759') && [16,18,19].includes(cardNumber.length)) {
  	return 'Switch';
  } 

};


