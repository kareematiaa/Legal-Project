import mission from "../../assets/mission.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Mission() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container text-center my-5 mission">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6 text-md-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="h-t fw-bold">{t("Our Mission")}</h2>
            <p className="mt-4 textt">
              {t("MissionDesc")}
              <br />
              {t("MissionDesc2")}
            </p>
          </motion.div>
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={mission} alt="Scales of Justice" className="w-75 " />
          </motion.div>
        </div>
      </div>
    </>
  );
}
