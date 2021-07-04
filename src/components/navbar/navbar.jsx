import React from "react";
import style from "./navbar.module.css";

const Navbar = (props) => {
  const inputRef = React.createRef(); // input 태그에 ref 연결하면 값 읽어옴

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onSearch(name);
    inputRef.current.value = "";
  };

  return (
    <nav className={style.nav}>
      <img src="/images/logo.png" alt="logo" className={style.img} />
      <span className={style.title}>YouTube</span>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="search" name="search" id="search" className={style.search} />
        <button className={style.submit}>
          <img src="/images/search.png" alt="search" className={style.search_icon} />
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
