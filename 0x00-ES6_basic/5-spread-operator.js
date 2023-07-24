export default function concatArrays(array1, array2, string) {
  const extendedArray = [...array1, ...array2, ...string];
  return extendedArray;
}
