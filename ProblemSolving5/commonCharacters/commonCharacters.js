const commonCharacters = (str1, str2) => {
let result = [];
  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < str2.length; j++) {
      if(str1[i]==str2[j])
      {
        found = true;
        break;
      }
    }
    if(found && !result.includes(str1[i])) 
     result.push(str1[i]);
  }
return result.join('');
};
console.log(commonCharacters('acexivou', 'aegihobu')); // it must return aeiou