import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'
import myCreatedRoute from './routes/Route';

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element:<div>This is my first route for react app.</div>
//   },
//   {
//     path:"/about",
//     element:<div> this about page </div>
//   },
//   {
//     path:"/contact",
//     element:<div>this is contact page</div>
//   },
//   {
//     path:"/portfolio",
//     element:<div> this Portfolio page</div>
//   }
// ])
// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element:<MainLayouts></MainLayouts>,
//     children:[
//       {
//         path:"/",
//         element:<Home />
//       },
//       {
//         path:"/about",
//         element:<About></About>
//       },
//       {
//         path:"/products",
//         element:<Products></Products>
//       }
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
