import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Values() {
  const { t } = useTranslation();
  return (
    <>
      <div className="values">
        <div className="overlay">
          <div className="container align-items-center justify-content-center">
            <motion.div
              className="ps-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="text-white py-4 mt-4">{t("Our Values")}</h1>
              <p className="text-white textt">
                {t("ValuesDesc1")}
                <span className="fw-bold">{t("ValuesDesc2")}</span>
                {t("ValuesDesc3")}
                <br /> {t("ValuesDesc4")}
                <br /> {t("ValuesDesc5")}
                <br /> {t("ValuesDesc6")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
