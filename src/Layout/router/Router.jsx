import Home from "../../pages/home/home/Home";
import Main from "../Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      }
    ]
    },
  ]);

  export default router;