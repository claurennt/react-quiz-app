//helper function to save data on localStorage
const saveToLocalStorage = (key, value) => {
  try {
    if (value.length) window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export default saveToLocalStorage;
