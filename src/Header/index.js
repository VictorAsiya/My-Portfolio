import React from "react";
import "./index.css";
// import * as SC from '@/style';
import * as SC from "../style";
import Logo from "../Images/Vic-logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header-Container delay">
      <div className="logo_div">
       
          <img src={Logo} alt="Victor Asiya" />
       
      </div>
      <SC.Navbar>
        <SC.Ul>
          <SC.Li className="active"><Link to= '/'>Home</Link></SC.Li>
          <SC.Li> <Link to='/./About/'>About</Link> </SC.Li>
          <SC.Li> <Link>Services</Link> </SC.Li>
          <SC.Li> <Link>Testimonials</Link> </SC.Li>
          <SC.Li> <Link>Contact</Link> </SC.Li>
        </SC.Ul>
      </SC.Navbar>
    </div>
  );
}

export default Header;
