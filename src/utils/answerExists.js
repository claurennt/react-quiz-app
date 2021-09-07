// function to check whether the answer exists in the states, i.e. has been answered already
const answerExists = (array, id) => {
  //throw an error if first argument is not array and second argument id is not a number, or one of the arguments is missing
  if (!Array.isArray(array) || isNaN(id) || !id || !array) {
    throw new Error('Please provide valid arguments: array and number');
  } else return array.some((a) => a.id === id);
};

module.exports = answerExists;
