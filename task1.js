const express =require('express');
const app = express();
app.use(express.json());
const courses = [
    { id:1, name :'courses1'},
    { id:2, name :'courses2'},
    { id:3, name :'courses3'},
];
app.get('/api/courses',(req,res)=>{
    res.send(courese);
});
//create
app.post('/api/courses/:id',(req,res)=>{
    const course ={
          id: courses.length+1,
          name:  req.body.name
    };
    courses.push(course);
    res.send(course);
});
//read
app.get('/api/courses/:id',(req,res)=>{
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.ststus(404).send("Not Found!");
    res.send(course);
});
//update
app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.ststus(404).send("Not Found!");
    course.name = req.body.name;
    res.send(course);
});
//delete
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.ststus(404).send("Not Found!");
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});
app.listen(5000);

