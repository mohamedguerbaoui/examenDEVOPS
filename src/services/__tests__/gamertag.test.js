// gamertag.test.js

const validateGamerTag = require('../gamertag');

describe('Gamer Tag Validation', () => {
  it('should be invalid if length is less than 8 characters', () => {
    expect(validateGamerTag('abcd')).toBe('Invalid - gamertag length must be at least 8 characters');
  });

  it('should be invalid if it does not contain a special character', () => {
    expect(validateGamerTag('abcdefgh')).toBe('Invalid - gamertag must contain at least a special character');
  });

  it('should be invalid if it does not contain a number', () => {
    expect(validateGamerTag('abcdefgh$')).toBe('Invalid - gamertag must contain at least a number');
  });

  it('should be valid if it meets all requirements', () => {
    expect(validateGamerTag('validTag1$')).toBe('Valid');
  });

  it('should handle other cases', () => {
    // Add more test cases to cover different branches
    expect(validateGamerTag('abcd$')).toBe('Invalid - gamertag must contain at least a number');
    expect(validateGamerTag('abcdefgh1')).toBe('Invalid - gamertag must contain at least a special character');
    expect(validateGamerTag('abcd1')).toBe('Invalid - gamertag must contain at least a special character');
  });
});
