// 100-weak.js
const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}
