// function to decode and substitute most common special characters in string
const decodeSpecialCharInString = (string) => {
  return string.includes(
    '&quot' ||
      '&#039;' ||
      '&amp' ||
      '&#038' ||
      '&egrave' ||
      '&#232' ||
      '&eacute' ||
      '&#233'
  )
    ? string
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, '"')
        .replace(/&amp/gi, '&')
        .replace(/&#038;/gi, '&')
        .replace(/&egrave/gi, 'é')
        .replace(/&#232;/gi, 'é')
        .replace(/&eacute/gi, 'è')
        .replace(/&#233;/gi, 'è')
    : string;
};

export default decodeSpecialCharInString;
