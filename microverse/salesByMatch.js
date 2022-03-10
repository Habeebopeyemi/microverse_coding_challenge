let colorArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let numberOfSocks = 9;

function sockMerchant(n, ar) {
  // Write your code here
  //   let arCopyWithoutDuplicate = null;
  let arCopy = [];
  let duplicatesArr = [];

  // checking the constraint  1 <= n <= 100, 1 <= ar[i] <= 100 and 0 <= i < n
  if (numberOfSocks > 0 && numberOfSocks <= 100) {
    ar.map((val, valIndex) => {
      if (val > 0 && val <= 100) {
        if (valIndex >= 0 && valIndex <= numberOfSocks) {
          arCopy.push(val);
        }
      }
    });
  }
  // sorting arCopy from lowest to highest
  arCopy.sort((a, b) => {
    return a - b;
  });

  // generating array without duplicate
  //   arCopyWithoutDuplicate = [...new Set(arCopy)];

  // getting numbers of duplicates and pushing them into an array for each occurrence
  for (let i = 0; i < arCopy.length; i++) {
    let duplicates = 1;

    for (let j = i + 1; j < arCopy.length; j++) {
      if (arCopy[i] === arCopy[j]) {
        duplicates++;
      } else {
        break;
      }
    }
    if (duplicates > 1) {
      if (duplicates % 2 !== 0) {
        duplicates = duplicates - 1;
      }
      duplicatesArr.push(duplicates);
      i += duplicates - 1;
    }
  }
  //     console.log(duplicatesArr);
  let duplicateSum = duplicatesArr.reduce((a, b) => a + b, 0);
  return Math.floor(duplicateSum / 2);
}

// sockMerchant(numberOfSocks, colorArray);
console.log(sockMerchant(numberOfSocks, colorArray));
