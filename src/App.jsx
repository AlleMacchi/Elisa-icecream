import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Flavours from "./components/Flavours/Flavours";
import Contact from "./components/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "https://elisa-icecream.netlify.app/",
      element: <Home />,
    },
    {
        path: "https://elisa-icecream.netlify.app/home",
        element: <Home />,
    },
    {
      path: "https://elisa-icecream.netlify.app/about",
      element: <About />,
    },
    {
      path: "https://elisa-icecream.netlify.app/flavours",
      element: <Flavours />,
    },
    {
      path: "https://elisa-icecream.netlify.app/contact",
      element: <Contact />,
    },
  ]);




function App(){
    return(
        <>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />      
        </>
    )
}

export default App;