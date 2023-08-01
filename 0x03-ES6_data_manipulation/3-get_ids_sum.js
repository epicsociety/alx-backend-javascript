export default function getStudentIdsSum(students) {
  const sum = students.reduce((currentSum, student) => student.id + currentSum, 0);

  return sum;
}
