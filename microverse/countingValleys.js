let stringPath = "DDUUUUDD";

function countingValleys(steps, path) {
  // Write your code here
  let paths = path.split("");

  let purePaths = [];
  let valleys = 0;
  let level = 0;
  let samplePath = ["D", "U"];

  // cleaning the input path
  paths.map(path => {
    if (steps >= 2 && steps <= 10 ** 6) {
      if (path === samplePath[0] || path === samplePath[1]) {
        purePaths.push(path);
      } else {
        return 0;
      }
    }
  });

  // getting number of valleys
  for (let i = 0; i < purePaths.length; i++) {
    let previousStep = level;
    level = purePaths[i] === "U" ? level + 1 : level - 1;
    if (previousStep == -1 && level == 0) valleys++;
  }

  return valleys;
}
// countingValleys(stringPath.length, stringPath);
console.log(countingValleys(8, stringPath));
