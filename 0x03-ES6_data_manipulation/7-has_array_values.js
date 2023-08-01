export default function hasValuesFromArray(newSet, smallArray) {
  for (const item of smallArray) {
    if (!newSet.has(item)) {
      return false;
    }
  }
  return true;
}
