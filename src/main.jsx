import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Statistic from './Components/Statistic/Statistic.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/statistic',
        element:<Statistic></Statistic>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
