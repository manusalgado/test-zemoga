import React from 'react';

const Footer = () => (
  <footer className="container Footer">
    <div className="row Footer__main-footer">
      <div className="col-md-6">
        <ul>
          <li>
            <a href="#"><small>Terms and Conditions</small></a>
          </li>
          <li>
            <a href="#"><small>Privacy Policy</small></a>
          </li>
          <li>
            <a href="#"><small>Contact Us</small></a>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul>
          <li>
            <small>Folow Us</small>
          </li>
          <li>
            <a href="#" className="Footer__icon-fb"></a>
          </li>
          <li>
            <a href="#" className="Footer__icon-tw"></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
export default Footer;