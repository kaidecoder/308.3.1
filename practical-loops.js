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

// let number = Number(prompt("Enter a number: "));

// let primeArr = []

// let i = number
// while(i < number + 10){
//   if(primeChecker(i+1)){
//     primeArr.push(i+1)
//     console.log(primeArr[0])
//   }
//   i++
// }

// function primeChecker(number) {
//   let prime = number !== 1;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   return prime;
// }

//PART III:  
// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let str = ""
for(c of csvString){
  str += c
}
const [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10, cell11, cell12] = str.split("\n")
console.log(cell1, cell2, cell3, cell4,cell5,cell6, cell7, cell8, cell9, cell10, cell11, cell12)



  
    



