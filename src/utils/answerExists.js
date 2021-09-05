// function to check whether the answer exists in the states, i.e. has been answered already
const answerExists = (array, id) => {
  if (!Array.isArray(array) || isNaN(id) || !id)
    throw new Error('Please provide valid arguments: array and number');
  return array.some((a) => a.id === id);
};

module.exports = answerExists;
