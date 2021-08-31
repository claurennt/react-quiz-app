// function to check whether the answer exists in the states, i.e. has been answered already
const answerExists = (array, id) => {
  return array.some((a) => a.id === id);
};

export default answerExists;
