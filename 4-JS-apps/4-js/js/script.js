var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guessCount < 10) {
	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
	guessCount += 1;
	if (parseInt(guess) == randomNumber) {
		correctGuess = true;
		break;
	}
}
if (correctGuess) {
	document.write('<h1>You guessed the number!</h1>');
	if (guessCount < 2) {
		triesWord = 'try';
	} else {
		triesWord = 'tries';
	}
	document.write('It took you ' + guessCount + ' ' + triesWord + ' to guess the number ' + randomNumber + '.');
} else {
	document.write('<h1>Sorry. You did not guess the number.</h1>');
}
/*if the guessCount is less than 2, than show the word try instead of the word tries, else, show the word tries  */