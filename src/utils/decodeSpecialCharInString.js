// // function to decode and substitute most common special characters in string
const decodeSpecialCharInString = (string) => {
  try {
    const element = document.createElement('textarea');
    element.innerHTML = string;
    const decoded = element.value;

    return decoded;
  } catch (e) {
    console.error(e);
  }
};

export default decodeSpecialCharInString;
