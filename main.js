const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
var studentList = [
    {
        id: "1",
        name: "abc",
        age: 20
    },
    {
        id: "2",
        name: "def",
        age: 21
    },
    {
        id: "3",
        name: "ghi",
        age: 22
    }
];

//To get Objects
app.get('/api/student',(req,resp) => {
    resp.json(studentList);
});

//To create an object
app.post('/api/studentPost', (req,resp) => {
    const newStudent = {
        ...req.body,
        id: studentList.length + 1
    };
    studentList.push(newStudent);
    resp.json(newStudent.id);
    console.log(req);
});

//Deleting an Object
app.delete('/api/studentDelete/:id',(req,resp) => {
    const idToBeDeleted = parseInt(req.params.id);
    const studentToBeDeleted = studentList.findIndex(student => student.id === idToBeDeleted);
    studentList.splice(studentToBeDeleted,1);
});

app.listen(5000); //Listening to port 5000
