//get method 
// two ways: general , axios ,etc

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((data)=>{console.log(data.json())}).catch(err=>{console.log(error)})  
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json)).catch((err)=>{console.log(err)})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

//post 
// fetch('https://jsonplaceholder.typicode.com/posts',
// {
//     method: 'POST',
//     body: JSON.stringify(
//           {
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }
// ),
//     headers: {fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 2,
//       title: 'foos',
//       body: 'bars',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => console.log(response.status))
    

//     body: JSON.stringify({
//       id: 2,
//       title: 'foos',
//       body: 'bars',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => console.log(response.status))
    




// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
   
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json()).then((res)=>{console.log(res)})
   










// axios.get
// axios.post
// axios.patch


import axios from 'axios'

async function fetchdata(){
const k = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(k.data)
}
fetchdata()



// const k1 = axios.post('https://jsonplaceholder.typicode.com/posts')
// console.log(k)

















// http method :
// get // queryu parameters
// post //form data
// put
// delete 
// Patch
// options

// http status
// 100-199 // informational purpose 
// 200-299 // success responses/ creation 
// 300-399 // redirects 
// 400-499 // error code 403 ,404 ,400 bad request 
// 500-599 // server error 


