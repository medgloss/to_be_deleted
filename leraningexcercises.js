// how we can acheive the async programmin gin js 
// 1)callback functions 
// 2)promises
// 3) async/await



// setTimeout(()=>{console.log("i am coming from tyhis function after 2 sec ")},2000)





// async function addtion(a,b){
//     setTimeout(()=>{return "i am coming from tyhis function after 2 sec "},5000)
// }
// const toatl_sum  = await addtion(2,3) // you will get the data after 2 sec 
// console.log(toatl_sum)



// callback functiosn 
// function a(b){ // here b is argument 

//     setTimeout(()=>{
//         console.log("fetching dtata")
//         b()
      
    
//     },2000)
// }

// function b (){
//     console.log("i am coming from fnction b")

// }

// a(b) // here b is parameter 




// promises
// 1)Pending
// 2)fullfilled
// 3)rejected

// function fetchdata() {
//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         reject("i am a promise , i will be rejected in 2 seconds ")
      
      
    
//     },2000)



//     })
// }



// fetchdata().then((data)=>{console.log(data)}).catch((err)=>{console.log("rrgt"+err)})




// import and exportin js
// import addtionfrom "./addtion.js" // new method 
// // export 
// // export default 
// export function addtion(a,b){ .// normal exporting methond 
//     return a+b 
// }





// const express = require("express")// old methud 
// const addtion = require("./addition")// old method 
// module.exports={ //old method 
//     qaddtions,
//     substruction 
// }


// import using es6 syntax 
// import express from 'express'
// export function abc (){

// }
// export default function abc (){

// }





// var, let const

// var :
// var k = 9

// var k = 10 

// function dummy (){
//     console.log(k)
// }
// dummy()
//  benefits :
//  can be reassigned 
// scope 
// let j = 8 
// let j =9
// console.log(

// )
 
// let priced =100
// function test_data(){
//     console.log(priced)
// }
// test_data()
// function (){
//     console.log()
// }


//function scop
// block scope - let
// function scope/global scope  -- var 
// const block scope

// genralised for loop 
// for (let i=0;i<5;i++){
//     console.log(i)
// }

// for loop modified 
const array1 =["abc","def","jhg"]

// for(let i of array1){

//     console.log(i)
// }

// fucntion for loop or hof loop
// array1.forEach((data)=>{console.log(data)})


// while loop
// let i =5
// while(i <10){
//     console.log(i)
//     i++
// }