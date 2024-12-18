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

import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Statistic from './Components/Statistic/Statistic.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
        
      }
      // {
      //   path:'/blogs',
      //   element:<Blogs></Blogs>
      // }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
