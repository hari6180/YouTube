import React, { Component } from "react";
import style from "./navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <img src="/images/logo.png" alt="logo" className={style.img} />
        <span className={style.title}>YouTube</span>
        <form action="" method="get">
          <input type="text" name="search" id="search" />
          <button type="submit" className={style.submit}>
            <img src="/images/search.png" alt="search" className={style.search_icon} />
          </button>
        </form>
      </nav>
    );
  }
}

export default Navbar;
