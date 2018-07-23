import React from 'react';
import imgHero from './../assets/pope.png';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import handUp from './../assets/icons/hand-up.png';
import handDown from './../assets/icons/hand-down.png';

const Header = () => (
<header className="Header">
    <div className="Header__main-hero">
    <img src={imgHero} alt="Pope" className="Header__hero__img"/>
    </div>
          <div className="Header__main-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 Header__main-header__logo">
                  <Link className="Header__main-header__link-title" to="/">Rule of Thumb.</Link>
                  </div>
                  <div className="col-md-6 Header__main-header__menu">
                  <nav className="d-flex justify-content-end Header__main-header__nav">
                    <Link className="Header__main-header__link" to="/past-trials">Past Trials</Link>
                    <Link className="Header__main-header__link" to="/how-it-works">How it works</Link>
                    <Link className="Header__main-header__link" to="/log-in">Log In / Sing Up</Link>
                  </nav>
                  </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row Header__header-content">
              <p className="Header__header-content__opinion">What's your opinion on</p>
              <h2 className="Header__header-content__title">Pope Francis?</h2>
              <p className="Header__header-content__content">He's talking tough on clery sexual abuse,
                but is he just another papal pervert protector?
                (thumbs down) or a true pedophilie punshing pontiffic?
                (thumbs up)
              </p>
              <a href="#" className="Header__header-content__more">More information</a>
              <p>What's Your Veredict?</p>
              <div className="col-md-6 Header__header-content__up">
                <a href="#" className="Header__link">
                  <img src={handUp} alt="Up"/>
                </a>
              </div>
              <div className="col-md-6 Header__header-content__down">
                <a href="#" className="Header__link">
                  <img src={handDown} alt="Down"/>
                </a>
              </div>
            </div>
          </div>
        <div className="Header__closing">
          <div className="Header__closing-in col-md-3">
            <p>Closing in</p>
          </div>
          <div className="Header__closing-days col-md-9">
            <p>22 days</p>
          </div>
        </div>
  </header>
);

export default Header;