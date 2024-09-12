import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
// import Root from "../layout/Root";


export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }
])
