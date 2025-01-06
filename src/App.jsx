import "./App.css";
import i18n from "i18next";
import { useEffect } from "react";
//import Cookies from "js-cookie";
import { Element } from "react-scroll";
import Break from "./Components/Break/Break";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import Mission from "./Components/Mission/Mission";
import Navbar from "./Components/Navbar/Navbar";
import OurService from "./Components/OurService/OurService";
import Student from "./Components/Student/Student";
import Values from "./Components/Values/Values";
import Vision from "./Components/Vision/Vision";

function App() {
  //const lng = Cookies.get("i18next") || "en";

  // useEffect(() => {
  //   window.document.dir = i18n.dir();
  // }, [lng]);

  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = i18n.dir();

    // Listen for language change events and update direction
    const handleLanguageChange = (lng) => {
      document.documentElement.dir = i18n.dir(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener on component unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="vision">
        <Vision />
      </Element>
      <Break />
      <Mission />
      <Values />
      <Element name="service">
        <OurService />
      </Element>
      <Student />
      <Element name="contact">
        <ContactUs />
      </Element>
    </>
  );
}

export default App;
