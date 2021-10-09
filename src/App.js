import React from 'react'
import SideBar from "./components/SideBar.js"
import Header from "./components/Header.js";
import MovieList from "./components/MovieList.js";
import "./styles/App.css"
import {StateProvider} from "./context/Context.js"


const App = () => {
  return (
    <StateProvider>
      <div className="app">
        <SideBar />
        <Header />
        <MovieList />
      </div>
    </StateProvider>
  );
}

export default App

