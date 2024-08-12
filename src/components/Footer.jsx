import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p className="footer__copyright">
          {" \u00A9"} 2023 Around The U.S. |{" "}
          <strong>
            <a
              href="https://github.com/mmgonnar"
              target="_blank"
              className="footer__link"
            >
              Mariela González
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
