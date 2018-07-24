import React from 'react';
import west from './../assets/west.png';
import handUp from './../assets/icons/hand-up.png';
import handDown from './../assets/icons/hand-down.png';

const Influencer = ({ bigImage }) => (
  <div className="col-md-6 Influencer">
    <div className={'Influencer--image-content'+(bigImage?'-4':'')}>
      <img src={west} alt="vote" className="Influencer--image-content__image"/>
    </div>
    <div className="Influencer__detail">
      <h3 className="Influencer__name">Kanye West</h3>
      <p className="Influencer__time"><strong>1 mounth ago</strong> in Entertainment</p>
      <p className="Influencer__description">Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
      <div className="Influencer__vote Influencer__vote--up">
        <a href="#"><img src={handUp} alt="Up" className="Influencer__vote__image" /></a>
      </div>
      <div className="Influencer__vote Influencer__vote--down">
        <a href="#"><img src={handDown} alt="Down" className="Influencer__vote__image" /></a>
      </div>
      <a href="#" className="Influencer__link">Vote now</a>
      <div className="Influencer__detail__vote-img">
        <img src={handUp} alt="Up" className="Influencer__detail__vote-icon"/>
      </div>
      <div className="Influencer__detail__percent-content">
        <div className="Influencer__detail__percent-up">
          <p className="Influencer__detail__total">50%</p>
        </div>
        <div className="Influencer__detail__percent-down">
          <p className="Influencer__detail__total">50%</p>
        </div>
      </div>
    </div>
  </div>
);

export default Influencer;