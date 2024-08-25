import React from "react";
import Image from "../../Components/Image/Image";
import H1 from "../../Components/H1/H1";
import P from "../../Components/P/P";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Logo from "../../Components/Logo/Logo";
import { MdFilterListOff } from "react-icons/md";
export default function Header() {
  return (
    <div className="container">
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About Gotto</Link>
          </li>
          <li className="ListJop">
            <Link className="main">
              <span>Pages</span>
               <span className="SmallArrow">v</span>
            </Link>
            <div className="innerLi">
              <li>
                <Link to="/jop_listing">Jop Listings</Link>
              </li>
              <li>
                <Link to="/jop_details">Jop Details</Link>
              </li>
            </div>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="buttons">
          <a href="#">Register</a>
          <Button className={"button"} content={"Login"} />
        </div>
      </div>
    </div>
  );
}
