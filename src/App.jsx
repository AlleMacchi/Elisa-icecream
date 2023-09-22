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
      path: "/",
      element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/flavours",
      element: <Flavours />,
    },
    {
      path: "/contact",
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