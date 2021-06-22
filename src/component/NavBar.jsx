import React from "react";
import style from "./Navbar.module.css";

function NavBar() {
  return (
    <div>
      <ul className={style.ul}>
        <li className={`${style.li} ${style.title}`}>
          {" "}
          <span>✔</span> Pomofocus
        </li>
        <li className={`${style.li} ${style.listItem}`}>Report</li>
        <li className={`${style.li} ${style.listItem}`}>Setting</li>
        <li className={`${style.li} ${style.listItem}`}>Login</li>
      </ul>
    </div>
  );
}

export default NavBar;
