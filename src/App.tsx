import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";
import Home from "./home/pages/Home";
import Nav from "./Nav/Nav";

const App: React.FC = () => {
  return (
    <>
      <main className="">
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
