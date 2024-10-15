var form = document.getElementById("form");
var studentList = document.getElementById("studentlist");
var deleteStudentName = document.getElementById("delStudent");
var replaceStudentName = document.getElementById("relStudent");
var students = [];

function updateList() {
    while (studentList.firstChild) {
        studentList.removeChild(studentList.lastChild);
    };

    for (let i = 0; i < students.length; i++) {
        var name = students[i][0];
        var age = students[i][1];
        var gender = students[i][2];
        var schoolName = students[i][3];
        var bestSubject = students[i][4];

        var newStudent = document.createElement("li");
        newStudent.innerHTML = name;
        studentList.appendChild(newStudent);
        var studentInfo = document.createElement("ul");
        studentList.appendChild(studentInfo);
        var studentAge = document.createElement("li");
        var studentGender = document.createElement("li");
        var studentSchool = document.createElement("li");
        var studentSubject = document.createElement("li");

        studentAge.innerHTML = "Age: " + age;
        studentGender.innerHTML = "Gender: " + gender;
        studentSchool.innerHTML = "School: " + schoolName;
        studentSubject.innerHTML = "Best Subject: " + bestSubject;

        studentInfo.appendChild(studentAge);
        studentInfo.appendChild(studentGender);
        studentInfo.appendChild(studentSchool);
        studentInfo.appendChild(studentSubject);
    };
};

function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var schoolName = document.getElementById("schoolname").value;
    var bestSubject = document.getElementById("bestsubject").value;

    students.push([name, age, gender, schoolName, bestSubject]);

    updateList();
};

function replaceStudent () {
    var name = replaceStudentName.value;

    var namer = document.getElementById("namer").value;
    var ager = document.getElementById("ager").value;
    var genderr = document.getElementById("genderr").value;
    var schoolNamer = document.getElementById("schoolnamer").value;
    var bestSubjectr = document.getElementById("bestsubjectr").value;

    for (let i = 0; i < students.length; i++) {
        if (students[i][0] == name) {
            students[i][0] = namer;
            students[i][1] = ager;
            students[i][2] = genderr;
            students[i][3] = schoolNamer;
            students[i][4] = bestSubjectr;
        };

        updateList();
    };
};

function deleteStudent() {
    var name = deleteStudentName.value;

    for (let i = 0; i < students.length; i++) {
        if (students[i][0] == name) {
            students.splice(i, 1);
        };

        updateList();
    };
};