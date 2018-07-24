const influencers = (state=[], action) => {
  switch (action.type) {
    case 'ADD_INFLUENCERS':
      return state.concat(action.influencers);
    case 'VOTE_UP':
      return state.map((influencer) => {
        return influencer.id === action.id 
          ? { ...influencer, votes_up: influencer.votes_up + 1 } 
          : influencer;
      });
    case 'VOTE_DOWN':
      return state.map((influencer) => {
        return influencer.id === action.id 
          ? { ...influencer, votes_down: influencer.votes_down + 1 } 
          : influencer;
      });
    default:
      return state;
  }
};

export default influencers;