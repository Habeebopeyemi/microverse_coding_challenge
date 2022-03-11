let arrlength = 6;
let arrData = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  // Write your code here
  let Datas = [...arr];
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  Datas.map(data => {
    data < 0 ? negativeCount++ : data > 0 ? positiveCount++ : zeroCount++;
  });

  console.log(
    (positiveCount / Datas.length).toFixed(6) +
      "\n" +
      (negativeCount / Datas.length).toFixed(6) +
      "\n" +
      (zeroCount / Datas.length).toFixed(6)
  );
}

plusMinus(arrData);
