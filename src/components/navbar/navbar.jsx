import React, { memo, useRef } from "react";
import style from "./navbar.module.css";

const Navbar = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className={style.nav}>
      <div className={style.main} onClick={onClick}>
        <img src="/images/logo.png" alt="logo" className={style.img} />
        <span className={style.title}>YouTube</span>
      </div>
      <div className={style.wrap}>
        <input
          ref={inputRef}
          type="search"
          name="search"
          id="search"
          className={style.search}
          onKeyPress={onKeyPress}
        />
        <button type="submit" className={style.submit} onClick={onClick}>
          <img src="/images/search.png" alt="search" className={style.search_icon} />
        </button>
      </div>
    </nav>
  );
});
export default Navbar;
