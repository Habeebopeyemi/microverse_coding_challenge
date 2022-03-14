// let arrData = [1, 1, 0, -1, -1];
/*Week 1: exercise 1*/
// function plusMinus(arr) {
//   // Write your code here
//   let Datas = [...arr];
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let zeroCount = 0;

//   Datas.map(data => {
//     data < 0 ? negativeCount++ : data > 0 ? positiveCount++ : zeroCount++;
//   });

//   console.log(
//     (positiveCount / Datas.length).toFixed(6) +
//       "\n" +
//       (negativeCount / Datas.length).toFixed(6) +
//       "\n" +
//       (zeroCount / Datas.length).toFixed(6)
//   );
// }

// plusMinus(arrData);

/*Week 1: exercise 2*/

// let arrData = [1, 3, 2, 5, 7];

// function miniMaxSum(arr) {
//   // Write your code here
//   let Datas = [...arr];
//   let min = 0;
//   let max = 0;

//   Datas.sort((a, b) => {
//     return a - b;
//   });
//   for (let i = 0; i < Datas.length - 1; i++) {
//     min += Datas[i];
//   }
//   for (let i = 1; i < Datas.length; i++) {
//     max += Datas[i];
//   }

//   console.log(min + " " + max);
// }
// miniMaxSum(arrData);

/*Week 1: exercise 3*/

// let timestring = "06:04:3AM";

// function timeConversion(s) {
//   // Write your code here
//   let timeFragment = s.split(":");
//   let hour = parseInt(timeFragment[0]);
//   let min = parseInt(timeFragment[1]);
//   let sec = parseInt(
//     timeFragment[2]
//       .split("")
//       .filter(el => el <= "9")
//       .join("")
//   );

//   if (s.endsWith("PM")) {
//     hour === 12 ? (hour = 12) : (hour = 12 + hour);
//   }

//   if (s.endsWith("AM")) {
//     hour === 12 ? (hour = 0) : hour;
//   }
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (min < 10) {
//     min = "0" + min;
//   }
//   if (sec < 10) {
//     sec = "0" + sec;
//   }
//   let time = hour + ":" + min + ":" + sec;
//   console.log(time);
// }
// timeConversion(timestring);

/*Week 1: exercise 4*/
// let points = [12, 24, 10, 24, 25, 9];


// function breakingRecords(scores) {
//   // Write your code here
//   let newScores = [...scores];
//   let min = newScores[0];
//   let max = newScores[0];
//   let minArr = [];
//   let maxArr = [];

//   let minRecordBreakCount = 0;
//   let maxRecordBreakCount = 0;
//   let minMaxCountArray = [];

//   minArr.push(min);
//   maxArr.push(max);

//   for (let i = 1; i < newScores.length; i++) {
//     if (newScores[i] < min || newScores[i] === min) {
//       min = newScores[i];
//       minArr.push(min);
//       maxArr.push(max);
//     }
//     if (newScores[i] > max || newScores[i] === max) {
//       max = newScores[i];
//       maxArr.push(max);
//       minArr.push(min);
//     }
//   }

//   /*getting minimum record break count*/
//   let prev = minArr[0];
//   for (let i = 1; i < minArr.length; i++) {
//     if (prev - minArr[i] > 0) {
//       minRecordBreakCount++;
//     }
//     prev = minArr[i];
//   }

//   /*getting maximum record break count*/
//   let next = maxArr[0];
//   for (let i = 1; i < maxArr.length; i++) {
//     if (maxArr[i] - next > 0) {
//       maxRecordBreakCount++;
//     }
//     next = maxArr[i];
//   }
//   minMaxCountArray.push(maxRecordBreakCount);
//   minMaxCountArray.push(minRecordBreakCount);

//   console.log(minRecordBreakCount, minMaxCountArray);
// }
// breakingRecords(points);

/*Week 1: exercise 5 camelCasing*/
function processData(input) {
  //Enter your code here
} 

