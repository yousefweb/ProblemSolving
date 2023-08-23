
function isPalindrome(str) {
  const word = str.toLowerCase();
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let letter = "";

  for (let i = 0; i < word.length; i++) {
    if (characters.includes(word[i]))
      letter += word[i];
  }
  for (let j = 0; j < letter.length/2; j++) {
    if (letter[j] != letter[letter.length - 1 - j]) {
      return false;
    }
  }
  return true;
}
const str = prompt('Enter a string:');
console.log(isPalindrome(str));
