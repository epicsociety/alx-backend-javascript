export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [];
  for (const employee of reportWithIterator) {
    employeesArray.push(employee);
  }
  return employeesArray.join(' | ');
}
