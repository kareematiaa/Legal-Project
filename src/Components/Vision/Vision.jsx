import vision from "../../assets/vision.png";
import { useTranslation } from "react-i18next";

export default function Vision() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container text-center my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h2 className="h-t fw-bold">{t("Our Vision")}</h2>
            <p className="mt-4 textt">{t("description")}</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={vision} alt="Scales of Justice" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
