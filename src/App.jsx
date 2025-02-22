import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import DataGridPremiumDemo from './componets/componetsdummycomponet.tsx';
// import Dropdown from './componets/dropdown.tsx';
// import DataGridPremiumDemos from './componets/newdashboard.tsx';
// import DropdownComponnet from './componets/dropdown-second-with-library.tsx';
// import Map from './componets/reactleaflet.tsx';
// import TestingProps from './componets/testing-props.tsx';
// import App from './componets/dropdown-second-with-library copy.tsx';
// import Reactleaflet from './componets/reactleaflet.tsx';
import { BrowserRouter, Routes, Route,NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
function App() {
  const [count, setCount] = useState(9)
  const object = { name: 'deepak' }



  return (
    <>


      <BrowserRouter>
        <nav>

         <nav>
      <NavLink to="/about" end>
       about
      </NavLink>
      <NavLink to="/contact" end>
        Trending Concerts
      </NavLink>
      <NavLink to="/home">click on me to go to home page</NavLink>
      
    </nav>
          <Routes>


            <Route path="/about" element={<About />} />

            <Route path="/home" element={<Home />} />
            
            <Route path="/contact" element={<Contact />} />

          </Routes>


        </nav>








      </BrowserRouter>

      {/* <Dropdown/> */}
      {/* <Map/> */}
      {/* <Reactleaflet/> */}
      {/* <DropdownComponnet /> */}
      {/* <DataGridPremiumDemos /> */}
      <h1>thi is my base page </h1>
      {/* <TestingProps data={object} /> */}





    </>


  )
}

export default App
