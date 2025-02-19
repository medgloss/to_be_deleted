// varible declaration 


console.log("this is working")



// this is object list
const object1 =[ {
    name:"deepak",
    age:8,
    address:{
        persentaddress:"abc",
        permannentaadrress:"def"
    }
    
},{
    name:"deepak",
    age:8,
    address:{
        persentaddress:"abc",
        permannentaadrress:"def"
    }
    
},{
    name:"deepak",
    age:8,
    address:{
        persentaddress:"abc",
        permannentaadrress:"def"
    }
    
}]



// destructuring in nesting object 
const {address:{permannentaadrress}} = object1

// changing th name space of object 
const {address:finaLAddRESS} = object1

// console.log(finaLAddRESS)
// console.log(permannentaadrress)

// types of loops 
// one type 
// for(let i=0;i<object1.length;i++){
//     console.log(object1[0])
// }
// console.log(name)
// console.log(age)

// fetching values from pobjects 
console.log(object1.name)


//type 2
// object destructing in loops 
for(let i=0;i<object1.length;i++){
    console.log(i)
    console.log(object1[i])

}

// type 2 
for(let i of object1){
    console.log(i)

}

// type3 
object1.forEach((i)=>{console.log(i)   })




// spread an rest operator
// copy using spread opertaor 
 const testobject ={
    name:"deepak",
    age:8,
    address:{
        persentaddress:"abc",
        permannentaadrress:"def"
    }}
const newobject= {...testobject}
console.log(newobject)




//merging using spread operator 
const obj1 = {a:1,b:9,c:78}
const obj2 = {name:"test_name",class:98}
const merged_object={...obj1,...obj2}
console.log(merged_object)




//to update user objec properties 

const updatedobject = {...obj1,b:56}
console.log(updatedobject)



// rest operator
const {name,...rested} =testobject
console.log(rested)



// ways to do import and export and other stuffs
export const obj4 = {a:1,b:9,c:78}
