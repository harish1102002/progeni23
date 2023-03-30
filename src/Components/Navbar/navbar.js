import "./navbar.css";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import progeni_logo from "../../Images/progeni_logo.png";
import { Link } from "react-router-dom";
function NavBar(props) {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  const customNavbar = props.className;

  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className={`navbar ${customNavbar}`} onClick={e => e.stopPropagation()}>
        <div className="nav-container">

          <div className="nav-logo">
            <Link to="/"><img className="logo" src={progeni_logo} alt="progeni" /></Link>
            <h5 className="heading">PROGENI ..</h5>
          </div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/events"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/register"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                to="/previous-synergy"
                activeclassname="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Memories
              </NavLink>
            </li> */}

            <li className="nav-item">
            <NavLink   
              to="/about-us"
              activeclassname="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              About
            </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink   
                to="/contact-us"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          
        </div>
      </nav>
    </ div>
  );
}
export default NavBar;
