// gamertag.test.js

const validateGamerTag = require('../gamertag');

describe('Gamer Tag Validation', () => {
  it('should be invalid if length is less than 8 characters', () => {
    expect(validateGamerTag('abcd')).toBe('Invalid - gamertag length must be at least 8 characters');
  });


  it('should be invalid if it does not contain a special character', () => {
    expect(validateGamerTag('abcd1234')).toBe('Invalid - gamertag must contain at least a special character');
  });

  it('should be invalid if it does not contain a number', () => {
    expect(validateGamerTag('abcd$!è§à_')).toBe('Invalid - gamertag must contain at least a number');
  });

  it('should be valid if it meets all requirements', () => {
    expect(validateGamerTag('validTag1$')).toBe('Valid');
  });

});
