import { useState, useEffect } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "../../assets/mf_logo_no_border/malikfelixlogo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="name-logo" />
            <p>
              Malik Felix <span className="logo-title">Software Engineer</span>
              <span className="logo-punctuation">.</span>
            </p>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
        <div className="right">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <PrimaryButton
                to="/"
                className="mobile-contact-button"
                onClick={closeMobileMenu}
              >
                Contact
              </PrimaryButton>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-nav-button">
        <PrimaryButton className="contact-cta-button">Contact</PrimaryButton>
      </div>
    </nav>
  );
};

export default Header;

// import "./Header.css";
// import Logo from "../../assets/mf_logo_no_border/malikfelixlogo.svg";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <nav className="nav-container">
//           <div className="top-menu">
//             <div className="main-nav">
//               <div className="logo">
//                 <div className="logo-container">
//                   <img src={Logo} />
//                 </div>
//                 <div className="main-logo">
//                   <Link to="/">
//                     Malik Felix{" "}
//                     <span className="logo-title">Software Engineer</span>
//                     <span className="logo-punctuation">.</span>
//                   </Link>
//                 </div>
//               </div>
//               <div className="text-right menu-1">
//                 <ul>
//                   <li className="active">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="active">
//                     <Link to="/">Work</Link>
//                   </li>
//                   <li className="active">
//                     <Link to="/">About</Link>
//                   </li>
//                   <li className="active">
//                     <Link to="/">Contact</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;
