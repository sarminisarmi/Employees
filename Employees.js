const express=require('express')
const router=express();

// Get All Employees Data(Read)


let Employee=[
    
    {id:1,"name":"john doe", "course":"engineering","roll_no":"123"},
    {id:2,"name":"jane smith","course":"engineering","roll_no":"122"}
]

router.get('/', (req, res) => {
    res.json(Employee);
});
// Get a Single Employee Record(Read)

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
});


// Insert a New Employee Record(Create)
router.post('/', (req, res) => {
    const { name, course, roll_no } = req.body;
    const newEmployee = {
        id: employees.length + 1,
        name,
        course,
        roll_no
    };
    employees.push(newEmployee);
    res.status(201).send('Employee added successfully');
});
// Update an Employee Record (Update)
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, course, roll_no } = req.body;
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.name = name || employee.name;
        employee.course = course || employee.course;
        employee.roll_no = roll_no || employee.roll_no;
        res.status(201).send('Employee updated successfully');
    } else {
        res.status(404).send('Employee not found');
    }
});

// Partially Update an Employee Record (Update)
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, course, roll_no } = req.body;
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        if (name) employee.name = name;
        if (course) employee.course = course;
        if (roll_no) employee.roll_no = roll_no;
        res.status(201).send('Employee partially updated successfully');
    } else {
        res.status(404).send('Employee not found');
    }
});

// Delete an Employee Record
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Employee not found');
    }
});
module.exports = router;