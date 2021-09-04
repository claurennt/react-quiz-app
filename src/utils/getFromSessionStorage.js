//helper function to retrieve data from local storage if present or return default value

const getFromSessionStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
};

export default getFromSessionStorage;
