import './App.css';
import React from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import RegisterLogin from "./pages/registerLogin/registerLogin";
import Garden from "./pages/garden/Garden";
import Crops from "./pages/crops/Crops";
import Blogs from "./pages/blogs/Blogs";
import CropInfo from "./pages/cropInfo/CropInfo";
import NotFound from "./pages/notfound/NotFound";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import BlogPost from "./pages/BlogPost/BlogPost";

function App() {
  return (
    <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<RegisterLogin/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/garden" element={<Garden/>}/>
            <Route path="/Crops" element={<Crops/>}/>
            <Route path="/cropinfo" element={<CropInfo/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogpost" element={<BlogPost/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>


);
}



export default App;
