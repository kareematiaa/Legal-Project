import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import close from "../../assets/closeup.png";
import legal from "../../assets/iconLegal.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function OurService() {
  const { t } = useTranslation();

  return (
    <>
      <div className="sevices mt-5">
        <div className="overlay2">
          <div className="">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="row flex justify-content-center">
                <div className="col-10 col-lg-3 mb-5 sPadding">
                  <div className="p-4 text-white rounded-5 s-text service">
                    <p className=" service3">{t("Service1")}</p>
                  </div>
                </div>
                <div className="col-10 col-lg-3 mb-5">
                  <div className="p-4 text-white rounded-5 s-text service2 ">
                    <h1 className="text-center">{t("Our Services")}</h1>
                    <img src={legal} className="legalPic" alt="" />
                  </div>
                </div>

                <div className="col-10 col-lg-3 mb-5">
                  <div className="p-4 text-white rounded-5 s-text service3">
                    <p>{t("Service3")}</p>
                  </div>
                </div>
              </div>
              <div className="row flex justify-content-center">
                <div className="p-4 w-75 text-white text-center rounded-5 s-text">
                  <p>{t("Service2")}</p>
                </div>
              </div>
              <div className="text-center mt-5 text-white">
                <h5 className="fw-bold">"{t("support1")}"</h5>
                <p>{t("support2")}"</p>
                <p>{t("support3")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <h2 className="h-t fw-bold pb-5"> {t("Our Services")}</h2>
        <div className="row service rounded-4">
          <div className="col-md-3 pt-4">
            <div className="ps-5">
              <img src={icon1} className="s-pic" alt="" />
            </div>
          </div>
          <div className="col-md-9 pt-4">
            <div>
              <p className="s-text">{t("Sevice1")}</p>
            </div>
          </div>
        </div>
        <div className="row service2 rounded-4 mt-5">
          <div className="col-md-3 pt-4">
            <div className="ps-5">
              <img src={icon2} className="s-pic" alt="" />
            </div>
          </div>
          <div className="col-md-9 pt-4">
            <div>
              <p className="s-text">{t("Sevice2")}</p>
            </div>
          </div>
        </div>
        <div className="row service3 rounded-4 mt-5">
          <div className="col-md-3 pt-4">
            <div className="ps-5">
              <img src={icon3} className="s-pic" alt="" />
            </div>
          </div>
          <div className="col-md-9 pt-4">
            <div>
              <p className="s-text">{t("Sevice3")}</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 mt-5  respect ">
          <h5>"{t("support1")}"</h5>
          <h5>"{t("support2")}"</h5>
          <h5>"{t("support3")}"</h5>
        </div>
      </div> */}
    </>
  );
}
