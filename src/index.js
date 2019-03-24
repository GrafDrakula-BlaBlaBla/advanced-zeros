module.exports = function getZerosCount(number, base) {
  const arrSum= [];
  let copyBase = base; //12
  let factor = 2;
  let countPow = 0;
  let sum = 0;
// Разложение на простые множетели

// debugger
  do {
    if (copyBase % factor === 0) {
      copyBase /= factor; //6
      countPow++;

      if(Math.floor(number / Math.pow(factor, countPow)) >= 1){
        sum += Math.floor(number / Math.pow(factor, countPow));  
      }
      // arrValue.push(factor);
      } else if(sum === 0){
        factor++;
        // countPow = 0;
        // sum = 0;
      } else {
        arrSum.push(sum / countPow);
        factor++;
        countPow = 0;
        sum = 0;
      }
  } while (copyBase >= factor);

  arrSum.push(sum);

  return Math.min(...arrSum);
} 

//function getZerosCount(number, base) {
//   const arrValue = [];
//   let copyBase = base;
//   let factor = 2;

// // Разложение на простые множетели
//   do {
//     if (copyBase % factor === 0) {
//       copyBase /= factor;
//       arrValue.push(factor);
//     } else {
//       factor++;
//     }
//   } while (copyBase >= factor);

// // Находим сумму пока n/k  < 1 округляя до меньшего

// // let p = 1;

// const arrZeros = [];
// debugger
// for(let i = 0; i < arrValue.length; i++){
//     let copyValue =  arrValue[i];
//     let p = 0;
//     let sum = 0;
//     while(Math.floor(number / copyValue) >= 1){
//       p++;
//       sum += Math.floor(number / Math.pow(arrValue[i], p));
//       // p++;
//       copyValue = Math.pow(copyValue, p);
//     }
//     arrZeros.push(Math.floor(sum / p));

//   }
//   console.log(arrZeros);
// }
// getZerosCount(5,12);

// 1) Разложить число B системы счисления на простые множители.

// 2) Разделить число N на каждый уникальной простой множитель K, домножая K сам на себя до тех пор, пока 
//    N/K будет больше единицы, при этом округляя каждый результат до меньшего целого.

// 3) Если при разложении числа системы счисления мы получили несколько одинаковых простых множителей K, то результат выше          мы должны разделить на количество одинаковых K.

// 4) Из всех делений N на каждый уникальный множитель K выбрать наименьшее частное, которое и будет нашим ответом.


// getZerosCount(46899647, 232);
//1674985
// Находим сумму пока n/k  < 1 округляя до меньшего

// let p = 1;

// const arrZeros = [];
// for(let i = 0; i < arrValue.length; i++){
//     let copyValue =  arrValue[i];
//     let p = 0;
//     let sum = 0;
//     while(Math.floor(number / copyValue) >= 1){
//       p++;
//       sum += Math.floor(number / Math.pow(arrValue[i], p));
//       // p++;
//       copyValue = Math.pow(copyValue, p);
//     }
//     arrZeros.push(Math.floor(sum / countPow));

//   }
//   console.log(arrZeros);
// }
// getZerosCount(5,12);


// n = 5
// b = 12
// 12(2,2,3);

// 2^2 + 3^1

// while(n > 1)
//sumN = 1/count(n/k) n > n/k
// Sum2 = (2 + 1) = 3/2 = 1,5 = 1
// Sum3 = 1(1) = 1/1 = 1

// Zeros = 6/1 = 6
  
// getZerosCount(5,12);

// return countZeros;

// let sumtwo = 0;
// let sumfive = 0;
// let two=2;
// let five = 5 ;

// if(countTwo !== 0){
//   while(number/two >= 1){
//     sumtwo += Math.floor(number / two);
//     two *= 2;
//   }
//   sumtwo = Math.floor(sumtwo / countTwo); 
// }

// if(countFive !== 0){
//   while(number/five >= 1){
//     sumfive += Math.floor(number / five);
//     five *= 5;
//   }
//   sumfive = Math.floor(sumfive / countFive); 
// }
//   if(sumtwo < sumfive){
//     return sumtwo;
//   } else {
//     return sumfive;
//   }

// -=-=-=-=-=- -=-=-=-=-= -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=-
// -=-=-=-=-=- -=-=-=-=-= -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=-

// Находим колличество 2 и 5 в массиве(arrValue)
  // let countTwo = 0;
  // let countFive = 0;

  // arrValue.forEach((value) => {
  //   if(value === 2){
  //     countTwo++;
  //   } else if (value === 5) {
  //     countFive++;
  //   }
  // });
  // console.log(countTwo);
  // console.log(countFive);



// getZerosCount(10, 10);

// -=-=-=-=-=- -=-=-=-=-= -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=-
// -=-=-=-=-=- -=-=-=-=-= -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=- -=-=-=-=-=-

  // let copyBase = base;
  // let sqrt = Math.sqrt(copyBase);
  // let mn = 2;
  // let countTwo = 0;
  // let countFive = 0;

  // while(copyBase > 1 && mn <= sqrt){
  //   if(copyBase % mn === 0) {
  //     copyBase /= mn;
  //   } else if (copyBase % 2 !== 0) {
  //     //countTwo++;
  //     mn++;
  //   } else if (mn / 5){
  //     countFive ++;
  //     mn += 2;
  //   } else {
  //     mn += 2;
  //   }
  // }

  // // console.log(mn);

  // let sum=0;
  // let TrailingZeros = 0;
  // if(countTwo > countFive){
  //   while(Math.floor(number / mn) > 1){
  //     sum = Math.floor(number / mn);
  //     mn *= mn; 
  //   }
  //   return TrailingZeros = Math.floor(number / countFive);
  //   // return countFive;
  // } else {
  //     while(Math.floor(number / mn) > 1){
  //       sum = Math.floor(number / mn);
  //       mn *= mn; 
  //     }
  //     return TrailingZeros = Math.floor(number / countTwo);
  //   // return countTwo;
  // }
// }
// getZerosCount(10, 10);