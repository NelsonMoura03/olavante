// services/gamification.js
const calculateScore = (userActions) => {
  let score = 0;
  
  userActions.forEach(action => {
    switch(action.type) {
      case 'REPORT':
        score += 10;
        break;
      case 'SHARE':
        score += 5;
        break;
      case 'COMMENT':
        score += 2;
        break;
    }
  });
  
  return score;
};