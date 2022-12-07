const cleanSet = (set, startString) => {
  if (!startString || startString === undefined || typeof startString === 'undefined' || typeof set !== 'object') return '';
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
