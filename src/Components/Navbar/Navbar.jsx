import { Link } from "react-scroll";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (lang) => {
    //console.log(`Language changed to: ${lang}`);
    i18n.changeLanguage(lang);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="me-2"
            />
            <span className="brand-name">
              <strong>E.I.F</strong>
              <br />
              {t("navbar1")} <br />
              {t("navbar2")}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="vision"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  {t("Vision")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="service"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  {t("Services")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ">
              <i
                className="fa-solid fa-globe me-4 fs-4 globe-icon"
                onClick={toggleDropdown}
              ></i>
              {showDropdown && (
                <div className="dropdown-menu-custom">
                  <span onClick={() => handleLanguageChange("en")}>EN</span>
                  <span onClick={() => handleLanguageChange("ar")}>AR</span>
                </div>
              )}
              <i className="fa-brands fa-linkedin-in linked fs-4"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
