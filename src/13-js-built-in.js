// includes

const arr = [1, 2, 3, 4, 5];

const number = 3;
const strNum = "3";

console.log(arr.includes(number));
console.log(arr.includes(strNum));

// indexof

console.log(arr.indexOf(number)); // 2

console.log(arr.findIndex((item) => item === 5)); // 4

const arrNum = [3, 1, 4, 5, 9, 10, 2, 0, 7];

console.log(arrNum.sort());

// 내림 차순

const compareDesc = (a, b) => {
  if (a > b) {
    // 크다
    return -1;
  } else if (a < b) {
    // 작다
    return 1;
  } else {
    // 같다
    return 0;
  }
};

arrNum.sort(compareDesc);
console.log(arrNum);

// 오름 차순

const compareAsce = (a, b) => {
  if (a < b) {
    // a가 b보다 더 앞에 있어야 한다.
    return -1;
  } else if (a > b) {
    // a가 b보다 더 뒤에 있어야 한다.
    return 1;
  } else {
    // 같다
    return 0;
  }
};

arrNum.sort(compareAsce);
console.log(arrNum);