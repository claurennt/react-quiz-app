import getFromLocalStorage from "./getFromLocalStorage";

// helper function to append new item to local storage
const pushToLocalStorage = (key, value) => {
  try {
    const currentValues = getFromLocalStorage(key, []);

    currentValues.push(value);

    localStorage.setItem(key, JSON.stringify(currentValues));
  } catch (e) {
    console.log(e);
  }
};

export default pushToLocalStorage;
