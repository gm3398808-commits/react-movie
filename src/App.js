 import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'




 const routes= createBrowserRouter([
{path:"/",element:<Layout/>,children:[
  {path:"spidderman",element:<Home/>},
   {path:"Crime",element:<Crime/>},
    {path:"Action",element:<Action/>}
]}
 ])


export default function App() {

  return (<> 
 hello
  {/* <RouterProvider router= {routes}/> */}
</>
  )
}

