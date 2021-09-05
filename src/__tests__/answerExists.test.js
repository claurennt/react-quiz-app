const answerExists = require('../utils/answerExists');

describe('helper fn answerExists test', () => {
  const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
  it('Should return false or true after checking if answer id exists', () => {
    expect(answerExists(array, 1)).toBe(true);
    expect(answerExists(array, 4)).toBe(false);
  });
  it('Should throw an error if param is not array or number', () => {
    expect(() => answerExists(!array || Object, 'a' || null || !id)).toThrow(
      Error('Please provide valid arguments: array and number')
    );
  });
});
