// function to decode and substitute most common special characters in string
const decodeSpecialCharInString = (string) => {
  return string.includes(
    '&quot' ||
      '&#039' ||
      '&amp' ||
      '&#038' ||
      '&egrave' ||
      '&#232' ||
      '&eacute' ||
      '&#233'
  )
    ? string
        .replace(/&quot;/g || /&#039;/g, '"')
        .replace(/&amp/gi || /&#038;/gi, '&')
        .replace(/&egrave/gi || /&#232;/gi, 'é')
        .replace(/&eacute/gi || /&#233;/gi, 'è')
    : string;
};

export default decodeSpecialCharInString;
