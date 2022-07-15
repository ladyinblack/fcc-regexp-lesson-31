// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Reuse Patterns Using Capture Groups</h1>`;

/** TODO:
 * Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
 
 let repeatNum = "42 42 42";
 let reRegex = /change/;       // Change this line 
 let result = reRegex.test(repeatNum);
 */

function RepeatThrice(repeatNum) {
  let reRegex = /^(\d+)\s\1\s\1$/;
  return reRegex.test(repeatNum);
  // return repeatNum.match(reRegex);
}

console.log(RepeatThrice('42 42 42'));
console.log(RepeatThrice('100 100 100'));
console.log(RepeatThrice('42 42 42 42'));
console.log(RepeatThrice('42 42'));
console.log(RepeatThrice('101 102 103'));
console.log(RepeatThrice('1 2 3'));
console.log(RepeatThrice('10 10 10'));

/** HINT 1:
 * Give code below:
 *    let testString = "test test test";
 *    let reRegex = /(test)\s\1/;
 *    let result = reRegex.test(testString);
 * "result" will match only "test test" because "\1" in this example stands for the same text as most recently matched by the 1st capturing group (test).
 * If we were to literally translate the regex, it would look something like this:
 *    let re = /(test)\s\1/;
 *    let literalRe = /test\stest/;
 * Both "re" and "literalRe" would match the same thing.
 *
 * HINT 2:
 * Given the code below:
 *    let testString = "test test test";
 *    let reRegex = /(test)(\s)\1\2\1/;
 *    let result = reRegex.test(testString);
 * "result" will match whole "test test test" because:
 *  "\1" repeats ("test")
 *  "\2" repeats ("\s")
 *
 * HINT 3:
 * The code below:
 *    let testString = "test test test test test test";
 *    let reRegex = /(test)(\s)\1\2\1/g;
 *    let result = reRegex.test(testString);
 * because we used "\g", our Regex doesn't return after first full match ("test test test") and matched all repetitions.  Think about how you can assert the 'start' and 'end' of the string.
 */
