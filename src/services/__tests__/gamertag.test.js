// gamertag.test.js

const validateGamerTag = require('../gamertag');

describe('Gamer Tag Validation', () => {
  it('should be invalid if length is less than 8 characters', () => {
    expect(validateGamerTag('abcd')).toBe('Invalid - gamertag length must be at least 8 characters');
  });

});
