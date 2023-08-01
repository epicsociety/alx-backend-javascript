export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const concatString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      concatString.push(value.slice(startString.length));
    }
  });
  return concatString.join('-');
}
