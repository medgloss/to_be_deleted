import React from "react";
import {useState,useEffect} from "react"


export default function TestingProps(abc) {
var transformed_data  = abc.data.name
const [count ,setcount]= useState(0)
const [data,setdata] =useState([])

useEffect(
  
  ()=>{

console.log("am imounted ")

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {console.log(json)
        setdata(json)
      })

  } //call back function 
  
  ,[] //dependacies array 


)


// api methods 
get /// if the datais not decure
post method  /// if the the details are secured
put //for updtion of recorr
delete // for 
Options..

error code in
// statuscode 
100-199// imformational messages 
200-299 // onject, user cretion , registration , 201 , 200 ,
300-399 //redirectio request
400-499//404.400 is bad request 
500-599//server eroor internal server error 




function test_func() {
  
  setcount(count+1)
}


  return (
  <>
<h1>i am coming from parent component and my value is userna {{data.toString()}} <button onClick={()=>test_func()}>it increases the count value</button></h1>
</>
  );
}
