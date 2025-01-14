/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) 
{
  let test = "";
    
  for(let i=0; i<textInput.length; i++)
  {
   test += textInput[textInput.length-1-i];
  }
  
  if (textInput === test)
  {
    console.log(textInput + " is a palindrome.")
  }
  else
  {
    console.log(textInput + " is not a palindrome.")
  } 
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console

checkPalindrome(testString);
checkPalindrome(testString2);