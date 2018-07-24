import React from 'react';
import handUp from './../assets/icons/hand-up.png';
import handDown from './../assets/icons/hand-down.png';

const Influencer = ({ influencer, handleVoteUp, handleVoteDown }) => (
  <div className="col-md-6 Influencer">
    <div className="Influencer--image-content">
      <img src={influencer.img} alt="vote" className="Influencer--image-content__image"/>
    </div>
    <div className="Influencer__detail">
      <h3>{influencer.name}</h3>
      <p><span>{influencer.time}</span> in {influencer.category}</p>
      <p>{influencer.description}</p>
    <div className="Influencer__detail__img">
      <a href="#" onClick={(e) => {
        e.preventDefault();
        handleVoteUp(influencer.id);
      }}>
        <img src={handUp} alt="Up"/>
      </a>
    </div>
    <div className="Influencer__detail__img">
      <a href="#" onClick={(e) => {
        e.preventDefault();
        handleVoteDown(influencer.id);
      }}>
        <img src={handDown} alt="Down"/>
      </a>
    </div>
      <a href="#" className="Influencer__link">Vote now</a>
      <div className="Influencer__detail__vote-img">
        <img src={handUp} alt="Up" className="Influencer__detail__vote-icon"/>
      </div>
      <div className="Influencer__detail__percent-content">
        <div className="Influencer__detail__percent-up">
          <p className="Influencer__detail__total">{Math.round((influencer.votes_up * 100) / (influencer.votes_up + influencer.votes_down))}%</p>
        </div>
        <div className="Influencer__detail__percent-down">
          <p className="Influencer__detail__total">{Math.round((influencer.votes_down * 100) / (influencer.votes_up + influencer.votes_down))}%</p>
        </div>
      </div>
    </div>
  </div>
);

export default Influencer;