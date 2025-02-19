// arrowfunctions 
// normal or basic function 


// async function addtion(a,b){
// return a+b;
// }


// console.log(addtion(3,6))


// arrow fucntion 
// const addition = async (a,b)=>{
//     return a+b;

// }
// console.log(test_name(7,7))




import axios from 'axios'

// async function fetchdata(){
// const k = await axios.get('https://jsonplaceholder.typicode.com/posts')
// console.log(k.data)
// }
// fetchdata()


//post request using axios 
// const k1 =  axios.post('https://jsonplaceholder.typicode.com/posts',{
//     "userId": "10",
    
//     "title": 'temporibus sit alias delectus eligendi possimus magni',
//     "body": 'quoquia'
//   })
// console.log(k1.data)
  
// const k2 =  axios.put('https://jsonplaceholder.typicode.com/posts',{
//     "userId": "10",
    
//     "title": 'ti',
//     "body": 'quoquia'
//   })
// console.log(k2.data)
  



// const k3 =  axios.put('https://jsonplaceholder.typicode.com/posts/1',{

//     "title": 'ti',
//     "body": 'quoquia' ,"userId": "10",
//   })
// console.log(k3?.data)
  



// what is header , how to handle 




const headers= {
          'Content-type': 'application/json; charset=UTF-8',
          "Authrixation":"deapk"

        }


       const array1 = [1,2,3,"f","r"]

       const array2 = [1,2,3,"f","r"]
       console.log(array1.indexOf(3)) //it tells u the index of the the particular array 
       array1.unshift(56)
       array1.shift()//it removes one element from the start of the array
       console.log(array1)
       console.log(array1[0]) // ways to fetch itm from a list 
array1.forEach((data)=>{console.log(data)})
console.log(array1.includes("f"))  // using the foreavh fucntion 
array1.map((data)=>{console.log(data)})
console.log(array1.includes("f"))// using the map function
