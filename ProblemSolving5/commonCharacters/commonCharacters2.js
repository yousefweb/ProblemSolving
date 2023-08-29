const commonCharacters = (str1, str2,str3) => {
  let result = [];
    for (let i = 0; i < str1.length; i++) {
      let found = false;
      for (let j = 0; j < str2.length; j++) {
        for (let k = 0; k < str3.length; k++) {
          
          if(str1[i]===str2[j] && str1[i] ===str3[k])
          {
            found = true;
            break;
          }
       
        }
      }
      if(found && !result.includes(str1[i])) 
       result.push(str1[i]);
    }
  return result.join('');
  };
  console.log(commonCharacters('acexivou', 'aegihobu',"axbgiouve")); // it must return aeiou