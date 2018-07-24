import React from 'react';

const Footer = () => (
  <footer className="container Footer">
    <div className="row Footer__main-footer">
      <div className="col-md-6 Footer__main-footer__parent">
        <ul className="Footer__content">
          <li className="Footer__li">
            <a href="#" className="Footer__link"><small>Terms and Conditions</small></a>
          </li>
          <li className="Footer__li">
            <a href="#" className="Footer__link"><small>Privacy Policy</small></a>
          </li>
          <li className="Footer__li">
            <a href="#" className="Footer__link"><small>Contact Us</small></a>
          </li>
        </ul>
      </div>
      <div className="col-md-6 Footer__main-footer__parent">
        <ul className="Footer__content">
          <li className="Footer__li">
            <a href="#" className="Footer__link">
              <small>Folow Us</small>
            </a>
          </li>
          <li className="Footer__li">
            <a href="#">
              <span className="Footer__social-fb"></span>
            </a>
          </li>
          <li className="Footer__li">
            <a href="#">
            <span className="Footer__social-tw"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
export default Footer;