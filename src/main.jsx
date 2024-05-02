import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './component/About/About.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import Contact from './component/Contact/Contact.jsx'
import Error from './component/Error/Error.jsx'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='/About' element={<About/>}/>
//     </Route>
//   )
// )
const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path:"",
          element:<Home/>
        },
        {
          path:"Contact",
          element:<Contact/>
        },
        {
          path: "About",
          element: <About />
        },
        {
          path:"*",
          element:<Error/>
        }
      
      ]
    }
  ])
  
 


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
