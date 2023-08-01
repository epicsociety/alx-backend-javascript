export default function updateStudentGradeByCity(students, location, newGrades) {
  const filteredStudents = students.filter((student) => student.location === location);
  const newArray = filteredStudents.map((student) => {
    const updatedStudent = { ...student };
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (!newGrade) {
      updatedStudent.grade = 'N/A';
    } else {
      updatedStudent.grade = newGrade.grade;
    }
    return updatedStudent;
  });

  return newArray;
}
