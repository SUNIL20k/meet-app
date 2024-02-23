import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './body';
import Navbar from './navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddMeet from './addmeet';
import Mymeet from './mymeet';

const App=()=>{
  return <div className='appback'>
    <Navbar/>
    <Outlet/>
  </div>
}

const ways=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/addmeet",
          element:<AddMeet/>
        },
        {
          path:"/mymeet",
          element:<Mymeet/>
        },
      ]
    } 
  ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);

