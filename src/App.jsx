import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import DataGridPremiumDemo from './componets/componetsdummycomponet.tsx';
// import Dropdown from './componets/dropdown.tsx';
// import DataGridPremiumDemos from './componets/newdashboard.tsx';
// import DropdownComponnet from './componets/dropdown-second-with-library.tsx';
import Map  from './componets/reactleaflet.tsx';
import TestingProps from './componets/testing-props.tsx';
// import App from './componets/dropdown-second-with-library copy.tsx';
// import Reactleaflet from './componets/reactleaflet.tsx';

function App() {
  const [count, setCount] = useState(9)
  const object  = {name:'deepak'}



  return (
  <>

    {/* <Dropdown/> */}
    {/* <Map/> */}
    {/* <Reactleaflet/> */}
    {/* <DropdownComponnet /> */}
     {/* <DataGridPremiumDemos /> */}
    
     <TestingProps data={object} />
  
  
  
  
  
  
  
  
  
  
  </>
     
      
  )
}

export default App
