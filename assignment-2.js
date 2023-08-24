// Assignment-1 //

// Write a javascript function that takes a number as a parameter and prints whether its positive ,negative or zero.

checkNumber = (number) =>{
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
}
checkNumber(-1)



// Assignment-2 //

// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N. //

factorialOfNumber =(N) =>{
    let answer = 1;
    if (N < 0) {
        return "Factorial is not defined for negative numbers.";
    }else{
    for (let i=1; i<=N; i++){
        answer = answer * i;
    }
    return answer;
}
}
console.log("Factorial of number is",factorialOfNumber(-5));


// Assignment-3 //

// Write a JavaScript function that takes two numbers as parameters and returns the larger one.  //

largerNumber = (a,b) =>{
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log("Larger Number is-"+ largerNumber(5,10));


// Assignment-4 //
 
// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). //


function checkIfPalindrome(string) {

    const lengthOfString = string.length;

    for (let i = 0; i < lengthOfString / 2; i++) {

        if (string[i] !== string[lengthOfString - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(checkIfPalindrome("bob"));



// Assignment-5 //

// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. //


primeNumber = (num) => {
    if (num < 2) {
        console.log("Not a prime number..")
        return;
    }
    let ans = [];
    for (let i = 2; i <= num; i++) {
        let isprime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            ans.push(i);
        }
    }
    return ans;
}
console.log("Prime number in array: ", primeNumber(1));


// Assignment 6  //
 
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.  //

calculator = (a, b, operation) => {
    if (operation === "+") {
        console.log("Addition is ", a + b);
    }
    if (operation === "-") {
        console.log("Substraction is", a - b);
    }
    if (operation === "*") {
        console.log("Multiplication is", a * b);
    }
    if (operation === "/") {
        console.log("Division is", a / b)
    }
}
calculator(22, 23, "/")


// Assignment 7 //

// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. //

vowels = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels are", vowels("aeiou"))



// Assignment 8 //

// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. //

perfect = (num) => {
    let count = num;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            count = count - i;
        }
        else {
            continue;
        }
    }
    if (count === 0) {
        console.log("perfect number");
    }
    else {
        console.log("not perfect number");
    }
}

perfect(28);

// Assignment 9 //

//  Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones. //



fib = (num) => {
    let a = 0;
    let b = 1;
    let c = 0;
    let ans = [];
    for (let i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c < num) {
            ans.push(c)
        }
    }

    return ans;

}
console.log("Fibonacci numbers are", fib(20))


// Assignment 10 //

// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10. //

table = (num) => {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(num * i)
    }
    return table;
}

console.log("Table upto 10", table(2))
