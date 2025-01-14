// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) 
{
  
let newArray = [];

for(let num of testArray3)
{
  if(!newArray.includes(num))
  {
  newArray.push(num)
  }
  testArray3 = newArray;
  
}

console.log(testArray3);

}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console

removeDuplicates(testArray3);