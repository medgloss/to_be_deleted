// import { useState } from 'react'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import Contact from './pages/Contact.jsx'
// import About from './pages/About.jsx'

// // Separate component for navigation logic
// function NavigationButton() {
//   const navigate = useNavigate()
  
//   const handleClick = () => {
//     navigate("/about")
//   }
  
//   return <button onClick={handleClick}>about</button>
// }

// function App() {
  

//   return (
//     <BrowserRouter>
   
//       <NavigationButton />
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App