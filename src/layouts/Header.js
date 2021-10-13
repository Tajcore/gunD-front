import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" replace={pathname === "/"}>
            brand
          </Link>
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default Header;
