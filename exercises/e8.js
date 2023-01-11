import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon({planets}, moonName) {
  // Your code goes here...
    return planets.filter((item) => {
      let check = item.moons ?? [''];
      if (check.includes(moonName)) {
        return item.name;
    }
  }).map((item) => item.name).pop();
};



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
