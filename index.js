/**
 * All Anagrams
 *
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 *
 *  @example
 *   const anagrams = allAnagrams('abc');
 *   console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 *
 * I: a string
 * O: an array of strings including every possible combination of input string characters
 * C:
 * E: what if there is an empty string?
 *
 */


const allAnagrams = (string) => {

  // TODO: Determine I.O.C.E.
  // TODO: Pseudocode your entire solution before you start coding
  // TODO: Your code here

  // make an array that will be returned at the end; has all anagrams
  let output = [];

  // edge case, if the string's length is 0, return an empty array
  if(string.length === 0){
    return [];
  }

  // calculate factorial function
  function factorial(num, acc){

    // base case
    if(num === 1){
      return acc;
    }

    if(acc === undefined){
      acc = num;
    }

    // recursion

    // accumulator equal to our first multiplication
    acc *= (num - 1)

    

    return factorial(num - 1, acc);

  }

  // console.log(factorial(3));

  // counter that takes the factorial called with the string length
  let counter = factorial(string.length);

  // pushes string to output as many times as there for the factorial count
  while(counter > 0){
    output.push(string)
    counter--
  }

  // shuffling letters in string function
  function shuffle(string){

    // current shuffle
    let current = string.split();
    
    // make random index value with math.random and math.floor
    let randomIndex = Math.floor(Math.random() * current.length)

    // iterate through the string
    for(let i = 0; i < current.length; i++){

      // swap letters in the string by index value

      // console.log(randomIndex)

      // empty temporary
      // let temp = current[i];

      // // swap current value with random value
      // current[i] = current[randomIndex];

      // // swap random index to temp
      // current[randomIndex] = temp;

      [current[i], current[randomIndex]] = [current[randomIndex], current[i]]

    }

    console.log(current)
    return current.join();
  }

  // somehow iterate through the output array with (factorial) amount
  for(let i = 0; i < output.length; i++){

    // a variable of the current value shuffled
    let currShuffle = shuffle(output[i])

    // while the output contains the current shuffled value
    while(!output.includes(currShuffle)){

      // call a new shuffle on newShuffle
      let newShuffle = shuffle(output[i])

      // reassign current shuffle
      currShuffle = newShuffle
    }

    // reassign to the unique shuffle
    output[i] = currShuffle

  }

  // return the array that was created
  return output;
}

// node index.js

const anagrams = allAnagrams('abc');
console.log(anagrams);