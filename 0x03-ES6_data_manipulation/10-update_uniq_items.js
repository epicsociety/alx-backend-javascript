// 10-update_uniq_items.js
function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of inputMap) {
    if (quantity === 1) {
      inputMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;
