import React from 'react';
import Influencer from './Influencer';

const Home = () => (
  <section className="container Home">
    <div className="row Home--content">
      <div className="col-md-3 Home--content__box">
        <p className="Home--content__title">Speak out. Be heard. <span>Be counted</span></p>
      </div>
      <div className="col-md-9">
        <p className="Home--content__description">Rule of Thumb is a crow sourced court of public opinion where anyone
            and averyone can speak out and speak freely. It's easy: You opinion, we analyze and put the data in a public report.
        </p>
      </div>
    </div>
    <div className="row Votes">
      <h3 className="Votes__title">Votes</h3>
    </div>
    <div className="row Home__grid">
      <Influencer/>
      <Influencer/>
      <Influencer/>
      <Influencer bigImage={true}/>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="Home__submit">
          Is there anyone else you would want us to add?
        </p>
        <a href="#" className="Influencer__submit-link">Submit a Name</a>
      </div>
    </div>
  </section>
);

  export default Home;