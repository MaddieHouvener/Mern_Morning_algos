// MERN Algos Week 1 - Sorting Algorithms
// https://www.bigocheatsheet.com/


// Bubble Sort

// For every pair of adjacent indicies
// swap them if the item on the left is larger than the item on the right
// continue until array is fully sorted

// function bubbleSort(arr) {
//     var len = arr.length; // fix the length
//     for (var i = 0; i < len; i++) { // loop over every element
//         for (var j = 0; j < len - i - 1; j++) { // go no further than length - i
//             // compare and classic swap
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     // return the given array
//     return arr;
// }


// Time Complexity
// - BEST: n when array is sorted
// - AVERAGE: O(n^2)
// - WORST: O(n^2)

// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/



// Selection Sort


// Selection sort works by iterating through the list,
// finding the minimum value,
// and moving it to the beginning of the list.

// Then, ignoring the first position, which is now sorted, iterate through the list again
// finding the next minimum value and move it to index 1.
// This continues until all values are sorted.


// function selectionSort(arr) {
//     var len = arr.length; // fix the length
//     for (var i = 0; i < len; i++) {
//         var min = i; // arbitrarily set i as min
//         for (var j = i + 1; j < len; j++) { // loop from i
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//             if (min !== i) {
//                 var temp = arr[i];
//                 arr[i] = arr[min];
//                 arr[min] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Time Complexity
// //   - Best: O(n^2)
// //   - Average: O(n^2)
// //   - Worst: O(n^2)

// // https://www.programmingsimplified.com/images/c/selection-sort.png

// const insertionSort = (arr) => {
//     let long = arr.length;
//     for(let i = 1; i < long; i++) {
//         let j = i;
//         while (j > 0 && arr[j-1] > arr[j]) {
//             let temp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = temp;
//             j -= 1;
//         }
//     }
//     return arr;
// }

// console.log(insertionSort([8,3,5,6,7,2]));


// // recursion 

// function mergeSort(arr) {
//     // return arrays of single values
//     if(arr.length <= 1){
//         return arr;
//     }
//     // get middle index, floor it to prevent floats
//     let m = Math.floor(arr.length/2)
//     let l = arr.slice(0,m)
//     let r = arr.slice(m)
//     return mergeSortedArrays(mergSort(l), mergeSort(r));
// }

// function mergeSortedArrays(arr1, arr2) {
//     let len = arr1.length + arr2.length
//     let merged = [];

//     while(arr1.length && arr2.length){
//         if(arr1[0] < arr2[0]){
//             merged.push(arr1.shift());
//         }else {
//             merged.push(arr2.shift());
//         }
//     }

//     return merged.concat(arr1.slice().concat(arr2.slice()))
// //     let l = 0;
// //     let r = 0;
// //     for (let i = 0; i < len; i++) {
// //         if (arr1[l] > arr2[r]) {
// //             console.log("arr1[l]: " + arr1[l])
// //             console.log("arr2[r]: " + arr2[r])
// //             merged.push(arr2[r]);
// //             r++;
// //         } else {
// //             merged.push(arr1[l])
// //             l++;
// //         }
// //         console.log("merged array: " + merged)
// //     }
// //     return merged;
// // }


// mergeSortedArrays([1, 3] [2, 4]);


// let swap = (arr, i, j) => {
//     // swap two indexes in an array
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// };


// // QUICKSORT 

// //helper function 
// let PartitionLomuto = (arr, left, right) => {
//     if (left === undefined) {
//         left = 0;
//     }

//     if (right === undefined) {
//         right = arr.length - 1;
//     }
//     // select a pivot
//     const pivot = arr[right];
//     // start at the left most index
//     let i = left;

//     // looping from the left index until the right
//     for (let j = left; j < right - 1; j++) {
//         // if that value is less than or equal to the pivot
//         if (arr[j] <= pivot) {
//             // swap!
//             swap(arr, i, j);

//             // and move i!
//             i++;
//         }
//     }
//     // final swap to put the pivot back in the right spot
//     swap(arr, i, right);

//     // and return it's index
//     return i;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if(left < right){
//         let pivotIndex =PartitionLomuto(arr, left, right)
//         //left
//         quickSort(arr, left, pivotIndex-1);
//         //right
//         quickSort(arr, pivotIndex+1, right);
//         }
//     return arr;
//     }
// quickSort([4,6,9,1,2,5,3])

// let PartitionLomuto = (arr, left, right) => {
//     if (left === undefined) {
//         left = 0;
//     }

//     if (right === undefined) {
//         right = arr.length - 1;
//     }
//     // select a pivot
//     const pivot = arr[right];
//     // start at the left most index
//     let i = left;

//     // looping from the left index until the right
//     for (let j = left; j < right - 1; j++) {
//         // if that value is less than or equal to the pivot
//         if (arr[j] <= pivot) {
//             // swap!
//             swap(arr, i, j);

//             // and move i!
//             i++;
//         }
//     }
//     // final swap to put the pivot back in the right spot
//     swap(arr, i, right);

//     // and return it's index
//     return i;
// }


// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)

// O(n2)

// inputs
// k = 16
// arr = [2,5,3,6,7,0,0,23,11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]


// function findConsqSums(arr, k) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log("Outer Loop: " + i)
//         let sum = 0;
//         let arrC = [];
//         for (let j = i; j < arr.length; j++) {
//             console.log("Inter Loop: " + j)
//             sum += arr[j];
//             console.log("This is number being added: " + sum)
//             arrC.push(arr[j]);
//             console.log("This is number being pushed: " + arrC)
//             if (sum == k) {
//                 console.log("This is number being pushed: " + arrC)
//                 newArr.push(arrC);
//                 console.log("this is the newArr push:" + newArr)
//                 break;
//             }
//             if (sum > k) {
//                 break;
//             }
//         }
//     }
//     return newArr;
// }

// console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16));



// const twoSums = (arr, target) => {
//     console.log('\n', arr, target);
//     let resultsArr = []
//     }
//       for(i=0; i<arr.length; i++){
//         //startingval= arr[i]
//         //change starting val on each loop if we have found a matching sum
//           for(j=0; j<arr.length; j++){
//               if(arr[i] + arr[j] == target && arr[i] != arr[j]){
//                 resultsArr.push(i,j);
//                 console.log(resultsArr)
//               }
//           }
//       }
//   //since its s an array loopthru it
//   twoSums([2, 7, 11, 15], 9);

//   //BETTER WAY TO DO THE ABOVE  !!!!!!!!!!!!!!!!!

//   const twoSums2 =(arr, target) => {
//     let idx1 = 0;
//     let idx2 = 1;
//     let resultsArr = [];

//     while(idx2 <= arr.length){
//         if(arr[idx1] + arr[idx2] == target){
//             resultsArr.push(arr[idx1],arr[idx2]);
//             return resultsArr;
//         }
//         idx2++;

//         if(idx2 == arr.length) {
//             idx1++;
//             idx2=idx1 +1;
//         }
//     }
// }
// console.log(twoSums2([2, 11, 7, 15], 9))
// console.log(twoSums2([5,5,6], 10))












/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  "spicy": 5,
  "gourmet memes": 4200
};

const available = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  "spicy": 50,
  "gourmet memes": 42000,
  "sugar": 9001,
  "spice": 5,
  "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {


}


//PALINDROME

// Given a string
// return whether or not it's possible for it to be re-ordered into a palindrome
// What is it about a string that makes it possible for it to be a palindrome?

// palindrome is a string that when reversed is still equal to itself.

// "aabbccdde" => true
// "abcdedcba"

// "racecar"
// "tacocat"

// "baba" => true
// "baab"

// "bcda" => false
// "abcd"

let str1 = "apabbccdde";
let str2 = "racecar";
let str3 = "baba";
let str4 = "bcda";
let str5 = "boitdrtyhygreoirorhrhtoihogihrtohcda";
let str6 = "bcda";

function canStrBecomePalindrome(str) {
  console.log('\n------------');
  // separate the keys
  // if odd number > 1 -> false
  let countOdd = 0; // how many times we find odd
  let strDict = {};
  console.log('\n', str);

  for (let letter of str) {
    // console.log(letter);

    strDict.hasOwnProperty(letter) ? strDict[letter]++ : strDict[letter] = 1;
  }
  for (let key in strDict) {
    console.log(strDict[key]);

    // add count here
    count = strDict[key] // ?
    if (strDict[key] % 2 != 0) {
      console.log('we have an ODD num greater than 1')
      console.log(key)
      countOdd++;
    }
    if (countOdd > 1) {
      console.log('FALSE', countOdd);
      return false;
    }
    return true;
  }
  // console.log('strDict is ->',strDict);



}
canStrBecomePalindrome(str2)
// canStrBecomePalindrome(str2)
// canStrBecomePalindrome(str3)





// Examples:
// Input: S = "a#bc", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac"

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become ""

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c"


function backspaceCompare(S, T) {
  let arr1 = []
  let arr2 = []
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== '#') {
      arr1.push(S[i]);
      console.log(arr1);
    } else {
      arr1.pop();
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] !== '#') {
      arr2.push(T[i]);
      console.log(arr2);
    } else {
      arr2.pop();
    }
  }
  return arr1.join() === arr2.join();
}


console.log(backspaceCompare("ab##", "c#d#"));

}


/*
  CAN STRING ONE BE MADE FROM STRING TWO

  Given two strings,
  return true if the first string can be built from the letters in the 2nd string

  Ignore case

  Input: "Hello World", "lloeh wordl"
  Output: true

  Input: "Hey", "hello"
  Output: false, second string is missing a "y"

  Input: "hello", "helo"
  Output: false, second string doesn't have enough "l" letters
*/

function canBuildS1FromS2(neededStr, availableStr) {
  let dict = {};
  if (neededStr.length > availableStr.length) {
    return false;
  }
  neededStr = neededStr.toLowerCase();
  availableStr = availableStr.toLowerCase();
  for (let i = 0; i < availableStr.length; i++) {
    if (dict.hasOwnProperty(availableStr[i])) {
      dict[availableStr[i]]++;
    } else {
      dict[availableStr[i]] = 1;
    }
  }
  for (let i = 0; i < neededStr.length; i++) {
    if (dict.hasOwnProperty(neededStr[i])) {
      dict[neededStr[i]]--;
      if (dict[neededStr[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
console.log(canBuildS1FromS2('Hello World', 'lloeh word'))