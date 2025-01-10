import mission from "../../assets/mission.png";
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container text-center my-5 mission">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h2 className="h-t fw-bold">{t("Our Mission")}</h2>
            <p className="mt-4 textt">
              {t("MissionDesc")}
              <br />
              {t("MissionDesc2")}
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={mission} alt="Scales of Justice" className="w-75 " />
          </div>
        </div>
      </div>
    </>
  );
}
