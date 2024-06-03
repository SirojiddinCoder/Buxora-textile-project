import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import uzbekFlag from "../../assets/uzbflag1.png";
import usaFlag from "../../assets/englandflag.png";
import russiaFlag from "../../assets/rusflag.png";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

const options = [
  { value: "uzbek", label: "Uzbek", image: uzbekFlag },
  { value: "english", label: "English", image: usaFlag },
  { value: "russian", label: "Russian", image: russiaFlag },
];

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    // Add effect
    const dropdownItem = document.getElementById(`dropdown-item-${option.value}`);
    dropdownItem.classList.add('selected');
    setTimeout(() => {
      dropdownItem.classList.remove('selected');
    }, 1000); // Remove the class after 1 second (adjust the duration as needed)
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home page">
      <nav className="navbar" id="navbar">
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="logo Brand"
              style={{ width: "135px", height: "35px" }}
            />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">Asosiy</Link>
              </li>
              <li>
                <Link to="/bizhaqimizda">Biz Haqimizda</Link>
              </li>
              <li>
                <Link to="/toplamlar">To'plamlar Kolleksiyasi</Link>
              </li>
              <li>
                <Link to="/boglanish">Bog'lanish</Link>
              </li>
            </ul>
            <div className="language-selector">
              <div className="dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                  <img
                    src={selectedOption.image}
                    alt={selectedOption.label}
                    style={{ width: 20, marginRight: 8 }}
                  />
                  {selectedOption.label}
                </div>
                {isOpen && (
                  <div className="dropdown-list">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        id={`dropdown-item-${option.value}`} // Add unique ID
                        className="dropdown-item"
                        onClick={() => handleOptionClick(option)}
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          style={{ width: 20, marginRight: 8 }}
                        />
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
