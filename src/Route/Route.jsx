import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import Contact from "../Pages/Contact";
import Flashcard from "../Pages/Flashcard";
import Login from "../Pages/Login";
import FAQ from "../Pages/FAQ";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>
         
        },
        {
          path: "/contact",
          element: <Contact></Contact>
         
        },
        {
          path: "/flashcard",
          element: <Flashcard></Flashcard>
         
        },
        {
          path: "/login",
          element: <Login></Login>
         
        },
        {
          path: "/FAQ",
          element: <FAQ></FAQ>
         
        },
      ],
    },
  ]);

  export default router