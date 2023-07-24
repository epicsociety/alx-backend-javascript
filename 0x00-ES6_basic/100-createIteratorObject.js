export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentIndex = 0;
  let currentDepartmentIndex = 0;
  let currentDepartmentEmployees = allEmployees[departments[currentDepartmentIndex]];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentIndex >= currentDepartmentEmployees.length) {
        currentDepartmentIndex += 1;
        if (currentDepartmentIndex >= departments.length) {
          return { done: true };
        }
        currentDepartmentEmployees = allEmployees[departments[currentDepartmentIndex]];
        currentIndex = 0;
      }
      const value = currentDepartmentEmployees[currentIndex];
      currentIndex += 1;
      return { value, done: false };
    },
  };
}
