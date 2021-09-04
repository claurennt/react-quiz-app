//helper function to save data on localStorage
const saveToSessionStorage = (key, value) => {
  try {
    if (value.length) window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export default saveToSessionStorage;
