//PART I:  FIZZ BUZZ
let num = 1;
// while (num <= 60) {
//   (num%5==0 && num%3==0) ? text = (num + " Fizz Buzz")
//   : (num %5 ===0) ? text=(num + " Buzz") : (num%3===0) ? text=(num + " Fizz")
//   : text = (num)
//   console.log(text)
//   num++;
// }

//PART II:  PRIME TIME - given any number, loop searches for the next prime number, finds it, exits

let number = Number(prompt("Enter a number: "));

let primeArr = []

let i = number
while(i < number + 10){
  if(primeChecker(i+1)){
    primeArr.push(i+1)
    console.log(primeArr[0])
  }
  i++
}

function primeChecker(number) {
  let prime = number !== 1;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

//PART III:  