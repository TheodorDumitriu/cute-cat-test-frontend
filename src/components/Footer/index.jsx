import "./style.css";

import { getCurrentYear } from "../../utils/utilities";

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="footer container txt-center">
      <p className="footer__caption">
        This app was created for a job test purpose by Theodor Dumitriu -{" "}
        {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
