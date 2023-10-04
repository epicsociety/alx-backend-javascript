interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const user1: Student = {
    firstName: "Hing",
    lastName:  "Jens",
    age: 23,
    location: "Thailand"
};

const user2: Student = {
    firstName: "Dean",
    lastName:  "Reel",
    age: 17,
    location: "Island"
}

const studentsList: Student[] = [user1, user2]

var table = document.createElement('table');
document.body.appendChild(table); // Drew the main table node on the document

studentsList.forEach(function (student) {
  var tr = table.insertRow(); //Create a new row

  var td1 = tr.insertCell();
  td1.innerText = student.firstName;

  var td2 = tr.insertCell();
  td2.innerText = student.location;
});
