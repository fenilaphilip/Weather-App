import "./App.css";
import React from "react";
import Header from "./header.js";
import Currentweather from "./mainReport";
import Footer from "./footer";

export default function App() {
  return (
    <div className="screen">
      <div className="app container">
        <Header />
        <Currentweather />
        <Footer />
      </div>
    </div>
  );
}
