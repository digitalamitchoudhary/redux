import React from 'react'
import Home from './Pages/Home.jsx'
import Navbar from './Component/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Collection from './Pages/Collection.jsx'
  import { Bounce, ToastContainer } from 'react-toastify';

 function App() {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>
       <Navbar/>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
       <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
       </Routes>
    </div>
  )
}

export default App
