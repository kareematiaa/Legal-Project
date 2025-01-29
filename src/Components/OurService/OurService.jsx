import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function OurService() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container py-5">
        <div className="row pt-5 mt-5 ">
          <motion.div
            className="col-md-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-light rounded-5 pb-4 shadow">
              <div className="s-pic">
                <img src={icon2} className="" alt="" />
              </div>
              <p className="px-3 text-center s-text">{t("Sevice2")}</p>
              <p></p>
            </div>
          </motion.div>
          <motion.div
            className="col-md-4 one-service "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-light rounded-5 pb-4 shadow">
              <div className="s-pic">
                <img src={icon1} className="" alt="" />
              </div>
              <p className="px-3 text-center s-text">{t("Sevice1")}</p>
              <p></p>
            </div>
          </motion.div>
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-light rounded-5 pb-4 shadow">
              <div className="s-pic">
                <img src={icon3} className="" alt="" />
              </div>
              <p className="px-3 text-center s-text">{t("Sevice3")}</p>
            </div>
          </motion.div>
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
