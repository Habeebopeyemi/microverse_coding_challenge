let grades = [4, 73, 67, 38, 33];
function gradingStudents(grades) {
  // Write your code here
  let gradeCopy = [];
  let multipleOfFive = [];
  let possibleValue = [];
  let roundedValue = [];

  // checking the constraint 1 <= n <= 60  and  0 <= grade[i] <= 100
  if (grades.length > 0 && grades.length <= 60) {
    grades.map(grade => {
      if (grade >= 0 && grade <= 100) {
        gradeCopy.push(grade);
      }
    });
  }

  // creating multiple of five present within scoring range of 0 - 100
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      multipleOfFive.push(i);
    }
  }

  // getting possible value to round up to
  gradeCopy.map(grade => {
    multipleOfFive.map(val => {
      if (val - grade >= 0 && val - grade < 5) {
        possibleValue.push(val);
      }
    });
  });

  // method to generate rounded values
  gradeCopy.map((grade, gradeIndex) => {
    // consideration for rounding up
    if (grade > 37) {
      if (possibleValue[gradeIndex] - grade < 3) {
        roundedValue.push(possibleValue[gradeIndex])
      }
      if (possibleValue[gradeIndex] - grade >= 3) {
        roundedValue.push(grade)
      }
    } else {
      // consideration for not rounding up
      roundedValue.push(grade);
    }
  })
  return roundedValue;
}

// gradingStudents(grades);
// console.log(gradingStudents(grades));
