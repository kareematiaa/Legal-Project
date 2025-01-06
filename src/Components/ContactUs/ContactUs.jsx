import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact">
        <div className="overlay">
          <div className="container text-white">
            <h2 className="pb-4"> {t("Contact Us")}</h2>
            <p>
              <i className="fa-solid fa-phone"></i>
              <span className="px-3">26396581</span>
            </p>

            <p>
              <i className="fa-brands fa-linkedin-in" href=""></i>
              <span className="px-3">
                {t("navbar1")} <br />
                <span className="spansC">{t("navbar2")}</span>
              </span>
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i>
              <span className="px-3">info@gmail.com</span>
            </p>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              <span className="px-3">{t("Location")}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
