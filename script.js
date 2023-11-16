function addStudent() {
    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;

    var studentList = document.getElementById('studentList');
    var newStudent = document.createElement('div');
    newStudent.innerHTML = '<strong>' + name + '</strong> - ' + id;
    studentList.appendChild(newStudent);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
}
