import pic1 from "../../assets/lady.png";
import pic2 from "../../assets/legal.png";
import pic3 from "../../assets/salam.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const slides = [
    {
      image: pic2,
      textKey: "home1",
    },
    {
      image: pic1,
      textKey: "home2",
    },
    {
      image: pic3,
      textKey: "home3",
    },
  ];

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide pt-5 mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="overlay">
                  <p className="carousel-text">{t(slide.textKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev custom-carousel-control"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-icon">
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-carousel-control"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-icon">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
