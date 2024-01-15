// gamertag.js

function validateGamerTag(gamerTag) {
    if (gamerTag.length < 8) {
      return 'Invalid - gamertag length must be at least 8 characters';
    }
  }
  
  module.exports = validateGamerTag;
