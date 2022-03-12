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

let timestring = "06:04:3AM";

function timeConversion(s) {
  // Write your code here
  let timeFragment = s.split(":");
  let hour = parseInt(timeFragment[0]);
  let min = parseInt(timeFragment[1]);
  let sec = parseInt(
    timeFragment[2]
      .split("")
      .filter(el => el <= "9")
      .join("")
  );

  if (s.endsWith("PM")) {
    hour === 12 ? (hour = 12) : (hour = 12 + hour);
  }

  if (s.endsWith("AM")) {
    hour === 12 ? (hour = 0) : hour;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let time = hour + ":" + min + ":" + sec;
  console.log(time);
}
timeConversion(timestring);
