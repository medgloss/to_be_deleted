//  hof in js 
// all higher order functions takes input of another functions 
// sort
// const array1 = [4, 3, 2, 1];

// const sorted = array1.sort((a, b) => a + b); // is a descending order 

// console.log(sorted); // Output: [1, 2, 3, 4]
// const array2 = [4, 6, 2, 1];

// const sorted1 = array2.sort((a, b) => a -b); // do the incrementation/ ascending order 

// console.log(sorted1); // Output: [1, 2, 3, 4]






// const array3 = [4, 3, 2, 1];

// array3.forEach((item)=>{console.log(item)})






// const array4 = [4, 3, 2, 1];
// const arry7 = array4.reduce((acc,number)=> acc+number,0)
//  console.log(arry7)
// reduce always retuns the number 


//  const array8 = [4, 3, 2, 1];
// const arry9 = array8.map((number)=> number*2)
//  console.log(arry9)
//  it always return the array 

 


//filter 
///set timeoput 
//set interval
// % this si the reminder synbel 
// 7%2 =1
// 6%2 = 0
// 4%2 = 0
// 14%3 = 2


// filter function 
// const array9 = [2,4,5,6,8]
// const filterredarray  = array9.filter((item)=>{return item%2 })
// console.log(filterredarray)


// settimeout 
// 5 sec, this funtion will keep on running after each five seconds 
// setTimeout(callback,delay) delays are in milliseconds
// const minka  = setTimeout(()=>{
//     console.log("i will be printed out afterthe 5 seconds ")
// },10000)



// clearTimeout
// clearTimeout(minka)



//setinterval
// this function will after certain interval


// for (let i=0;i<10;i++){
//     console.log("yrs")
//     const id  = setInterval(()=>{console.log(i)}
//     ,1000)
    
// if (i==5){
//     clearInterval(id)
//     break
// }

// }






// const id  = setInterval(()=>{console.log("i will be keep on printing untill u stopme after 1 seconds")}
// ,1000)




// clearInterval

// clearInterval(id)
// to clear out the setinterval 


// cron jobs 


* *  * * *