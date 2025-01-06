import React from "react";
import teamImage from "../../assets/man.png";
import { useTranslation } from "react-i18next";

export default function Student() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="waves">
          <div className="waves2"></div>
          <div className="join-our-team-container">
            <div className="circle-background">
              <img src={teamImage} alt="Team Member" className="team-image" />
              <div className="text-overlay">
                <p> {t("Join Our Team")}</p>
              </div>
            </div>
          </div>
          <div className="text-center container">
            <p className="manText">
              {t("JoinDesc")} <br />
            </p>
            <span className="fw-medium manText"> {t("BeMember")}</span>
          </div>
        </div>
      </div>
    </>
  );
}
