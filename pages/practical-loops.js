//PART I:  FIZZ BUZZ - find multiples of 5 and 3(Fizz Buzz), or multiples of 5(Buzz) and multiples of 3(Fizz) or just print the number
let num = 1;
while (num <= 100) {
  //if divisible by 5 and 3
  num % 5 == 0 && num % 3 == 0
    ? //return Fizz Buzz if true
      (text = " Fizz Buzz")
    : //else if divisible by 5
      num % 5 === 0
      ? //return Buzz if true
        (text = " Buzz")
      : //else if divisible by 3
        num % 3 === 0
        ? //return Fizz if true
          (text = " Fizz")
        : //else return the number
          (text = num);
  console.log(text);
  num++;
}

//PART II:  PRIME TIME - given any number, search for the next prime number, find it, print it, stop the loop

let number = Number(prompt("Enter a number: "));
let nextPrimeNumber = "";
let i = number;
//I choose to search the next ten numbers above my chosen number
while (i < number + 10) {
  //I send the next number higher than the one im my prompt to my prime checker, and keep sending one number higher than that until I cover all the numbers in my chosen radius
  if (primeChecker(i + 1)) {
    //When my primeChecker detects a prime number, it returns a truthy value on that number, i add the number to my nexPrimeNumber string and break out
    nextPrimeNumber += i + 1;
    console.log("The next prime number: ", nextPrimeNumber);
    break;
  }
  i++;
}
//This function will check any number the user enters - for primeness.  Here number represents the (i+1) from line 30
function primeChecker(number) {
  //assume the number is prime(it is truthy) until it isn't
  let primeNumber = number;
  //for values between 2 and any number I enter
  for (let i = 2; i < number; i++) {
    //If the number has factors other than 1 and itself
    if (number % i === 0) {
      //then it is not a prime number(it is falsy)
      primeNumber = false;
      //no need to proceed - don't send it back to the caller
      break;
    }
  }
  //send the truthy value from the primeChecker back to what called it
  return primeNumber;
}

//PART III: Write a script that loops through a CSV string, stores data in rows, logs each row

// let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

//This function will separate CSV data into cells then print the cells and rows
function grabAllCellsFromACsvString() {
  let csvString =
    "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

  let loopedCsvString = "";
  for (characters of csvString) {
    loopedCsvString += characters;
  }
  //destructure the string values into rows
  const [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11] =
    loopedCsvString.split("\n");

  //output from each row of the string
  console.log(
    "The rows from the CSV:  ",
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
    row11
  );
}

grabAllCellsFromACsvString();
