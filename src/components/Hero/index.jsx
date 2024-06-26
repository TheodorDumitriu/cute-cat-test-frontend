import "./style.css";

// Importing packages
import { Link } from "react-router-dom";

// Importing components
import kitty from "../../assets/kitty-please.jpg";

const Hero = ({ title, caption, addButton, buttonUrl, buttonCaption }) => {
  return (
    <section className="hero">
      <h1 className="hero__title txt-center">{title}</h1>
      <p className="hero__caption txt-center">{caption}</p>
      {addButton && (
        <Link
          to={buttonUrl}
          className="hero__btn d-flex align-items-center justify-content-center position-r"
        >
          <p className="hero__btn-caption position-a">{buttonCaption}</p>
          <img className="hero__btn-img" src={kitty} alt={buttonCaption} />
        </Link>
      )}
    </section>
  );
};

export default Hero;
