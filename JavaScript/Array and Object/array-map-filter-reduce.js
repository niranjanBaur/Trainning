// MAP => it transform each element of the array into as per your requirement
// ==================

// const arr = [3,4,1,2,5,6,8]
// const output = arr.map(double)


// function double(x){
//     return 2*x;
// }

// console.log(output)

// ==================
// filter => it return filterized elements of the array
// ==================

// const arr = [3,4,1,2,5,6,8]

// function findOdd(x){
//     return x%2
// }
// function findEven(x){
//     return x%2 == 0
// }

// const odd = arr.filter(findOdd)
// const even = arr.filter(findEven)

// console.log(odd)
// console.log(even)

// =====================
// reduce() => it return a single element form the array i.e: maxNum , minNUM , sum etc.
// =====================

// const arr = [3,4,1,2,5,6,8]

// function sum(){
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//          sum = sum + arr[i];
//     }
//     return sum;
// }

// const op = arr.reduce(function(acc,curr){
//     acc = acc + curr
//     return acc
// },0)

// console.log(op)


// ===================================================
// ===================================================
// ===================================================

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'doe@gmail.com'
}
const output = Object.entries(data).map(([key, value]) => [value, key]);

console.log(output);

// ====================================================
// ====================================================
// ====================================================

// var obj = {num:2}

// var add = function(a,b,c){
//     return this.num + a + b + c
// }

// // console.log(add.call(obj,1,2,3)) // call takes parameter one by one


// var arr = [1,2,3]
// console.log(add.apply(obj,arr)) // but apply takes two  arguments (object,array)