export default function cleanSet(set, startString) {
  const concatString = [];
  set.forEach((value) => {
    if (startString !== '' && value.startsWith(startString)) {
      concatString.push(value.slice(startString.length));
    }
  });
  return concatString.join('-');
}
