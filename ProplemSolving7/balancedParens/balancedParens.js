function balancedParens(input) {
  let repo = [];

     for (let i = 0; i < input.length; i++) {
     
     
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') 
    {
      repo.push(input[i]);
    } 
    else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (repo.length === 0) { //because repo it is must start at open parans before the last check
        return false; 
      }

     
      const lastBracket = repo.pop();
      if ( (input[i] === ')' && lastBracket !== '(') || (input[i] === ']' && lastBracket !== '[')||
           (input[i]==='}' && lastBracket !== '{')
         ) 
         return false;

    }
  }
  if(repo.length === 0) return true;  

  else return false;

}

console.log(balancedParens('('));              
console.log(balancedParens('()'));           
console.log(balancedParens(')('));             
console.log(balancedParens('(())'));           
console.log(balancedParens('[](){}'));         
console.log(balancedParens('[({})]'));         
console.log(balancedParens('[(]{)}'));         
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); 
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); 



