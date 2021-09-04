//small helper function that automatically goes to the next page after less than 1 sec

const showNextPage = (questionId, history) => {
  questionId < 10
    ? history.push(`/play/${Number(questionId) + 1}`)
    : history.push(`/game/results`);
};

export default showNextPage;
