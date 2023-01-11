import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear({asteroids}) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const callBack = (astro) => astro.discoveryYear;

  function equalvalue (array, cb) {
      let max = array[0];
      for (let i = 0; i < array.length; i++) {
          if (cb(array[i]) > cb (max)) {
            max = array[i]
            if (cb(array[i]) === cb(array[i])) {
              return cb(array[i]);
            }
          } 
      }
      return max
  }
  return equalvalue(asteroids, callBack); 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
