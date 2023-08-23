function reverseWord(str) {
  if (str === "") {
    console.log("No String is inserted");
  }
  
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  
  return string;
}

const word = prompt("Enter the string:");

if (word === null) {
  console.log("User cancelled the input.");
} else {
  console.log(reverseWord(word));
}
