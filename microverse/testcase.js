const yourArray = [1, 1, 2, 3, 4, 5, 5];

const yourArrayWithoutDuplicates = [...new Set(yourArray)];

let duplicates = [...yourArray];

yourArrayWithoutDuplicates.forEach(item => {
  const i = duplicates.indexOf(item);
  duplicates = duplicates
    .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length));
    console.log(duplicates)
});

console.log(duplicates, yourArrayWithoutDuplicates);
