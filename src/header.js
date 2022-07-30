import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./search";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">WEATHER APP</div>
          <Search />
        </div>
      </nav>
    </div>
  );
}
