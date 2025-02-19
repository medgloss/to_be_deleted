// tenaryoperator 

let x= (1<2)? "true":"false"
console.log(x)

{{isloaded ? "render this component":"renderother other component "}}
// if (1<2){
//     console.log("true")
// }
// else{
//     console.log("false")
// }


// ways to passign the data from one component to other 
// using contect hook 
// using props 
// using redux 

// all about props 
// props are used to send the data from parent compnent to the child component 
// 


const element  = <abc brand="def" />

function abc (props){
    return (
        <> <h1>my brand is {props.brand}</h1>
        </>
    )
}


//importants hooks 
// useState,
// useEffect,
// useContext
// useCallback
// useRef
// useMemo



