import React from "react";

const style = {
  wrapper: "bg-gray-50 flex flex-col text-md md:text-md tracking-wider mx-auto",
  list: "cursor-pointer mx-auto block my-2 py-2 px-2 text-green-700 border-b border-gray-100 hover:bg-gray-50  md:border-0  font-bold md hover:text-green-700 transition duration-[300ms] ",
};
const DropDownMenu = (props) => {
  const onScroll = (val) => {
    props.onScroll(val);
  };
  return (
    <ul clasName={style.wrapper} style={{ fontFamily: "Poppins, sans-serif" }}>
      <li
        onClick={() => {
          onScroll("home");
        }}
      >
        <a
          aria-label="link of the navbar"
          className={style.list}
          aria-current="page"
          href="/"
        >
          Home
        </a>
      </li>
      <li
        onClick={() => {
          onScroll("about");
        }}
      >
        <a href="/" aria-label="link of the navbar" className={style.list}>
          About
        </a>
      </li>
      
      <a
        onClick={() => {
          onScroll("menu");
        }}
        href="/menu"
      >
        <p aria-label="link of the navbar" className={style.list}>
          Menu
        </p>
      </a>
    </ul>
  );
};

export default DropDownMenu;
