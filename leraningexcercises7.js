//  hof in js 
// all higher order functions takes input of another functions 
// sort
const array1 = [4, 3, 2, 1];

const sorted = array1.sort((a, b) => a + b); // Correct comparison function

console.log(sorted); // Output: [1, 2, 3, 4]
const array2 = [4, 6, 2, 1];

const sorted1 = array2.sort((a, b) => a +b); // Correct comparison function

console.log(sorted1); // Output: [1, 2, 3, 4]






const array3 = [4, 3, 2, 1];

array3.forEach((item)=>{console.log(item)})






const array4 = [4, 3, 2, 1];
const arry7 = array4.reduce((acc,number)=> acc+number,0)
 console.log(arry7)



 const array8 = [4, 3, 2, 1];
const arry9 = array8.map((number)=> number*2)
 console.log(arry9)

 