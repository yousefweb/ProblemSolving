function isPrime(num)
{
  let prime = true; 

let len = Math.sqrt(num);
for (let i = 2; i <= len; i++) {
  if(num%i==0)
  {
    prime = false;
    break;
  }
}
if(num<=1)
{prime = false;}

if(prime)
console.log("The number that inserted is prime :)..");
else
console.log("The number that inserted is not prime :(..");
}
while(1){
const num = prompt("Please enter a number you want to check:(0 to exit):");
if(num==0)
break;
console.log(isPrime(num));
}
