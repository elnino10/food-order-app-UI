import React, { Fragment, useState } from "react";

import CartButton from "./CartButton";

import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Fragment>
      <header
        className={
          scroll
            ? `${classes.header} ${classes["scroll-header"]}`
            : classes.header
        }
      >
        <Link to="/" className={classes.logo}>
          <img src="#" alt="logo" />
          <h2>forks and fingers</h2>
        </Link>
        <div className={classes.nav}>
          <ul className={classes.links}>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
            <CartButton onShowCart={props.onShowCart} />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;