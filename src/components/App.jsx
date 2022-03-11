import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Header from "./Header/Header"
import SimpleBottomNavigation from "./MainNav/MainNav";
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";




export const App = () => {
  return (
    <BrowserRouter >
     <Header/>
      <div className="app">
        <Container>
          <Routes>
            {/* <Route path="/movies"><Movies/></Route> */}
            <Route path="/" element={<Trending/>} exact/> 
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/search' element={<Search/>}/> 
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
};
