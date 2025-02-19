import React, { useEffect, useState } from "react";


export default function Dropdown() {
  const [value  , setvalue] = useState<string>("abc")  

  function  handlechange(event:React.ChangeEvent<HTMLSelectElement>){
    console.log(event)
    setvalue(event.target.value )

    console.log("i reached here")
  }


  return (
  <>
<div>selct a drop down dropdown</div>
<div>
  <select id="dropdown"value={value}onChange={handlechange}>
    <option value="apple">apple</option>
    <option value="orange">orange</option>
    <option value="berry">berry</option>
  
  </select>
  <div>selected : {value}</div>


  </div>
</>
  );
}
