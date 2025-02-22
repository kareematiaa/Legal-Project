import React from "react";
import teamImage from "../../assets/man.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Student() {
  const { t } = useTranslation();
  return (
    <>
      <div className="pt-5 mt-5">
        <div className="break">
          <div className="overlay">
            <div className="text-white text-center">
              <h1 className="fw-bolder">{t("Join Our Team")} </h1> <br />
              <span className="email1">{t("emailing")}</span>
              <br />
              <span className="email1">{t("emailing2")}</span>
            </div>
          </div>
        </div>

        <div className="text-center container j-width j-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="manText">
              {t("JoinDesc")} <br />
            </p>
            <span className="fw-medium manText"> {t("BeMember")}</span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
