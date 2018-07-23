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
      <h3>Kanye West</h3>
      <p><span>1 mounth ago</span> in Entertainment</p>
      <p>Vestibulum diam ante, porttitor a odio eget, eget, rhoncus neque. Aenean eu velit libero</p>
    <div className="Influencer__detail__img">
      <img src={handUp} alt="Up"/>
    </div>
    <div className="Influencer__detail__img">
      <img src={handDown} alt="Down"/>
    </div>
      <a href="#" className="Influencer__link">Vote now</a>
      <div className="Influencer__detail__vote-img">
        <img src={handUp} alt="Up"/>
      </div>
    </div>
  </div>
);

export default Influencer;