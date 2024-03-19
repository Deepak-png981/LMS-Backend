//lms-backend-without-ehh
const express = require('express')
const app = express();
const cors = require('cors');
const ConnectDB = require('./config/db');
app.use(cors());
app.use(express.json());

ConnectDB();
const user = require('./routes/user');
const course = require('./routes/course')
const assignment = require('./routes/Assignment')
const courseModule = require('./routes/courseModule')
const courseModuleItem = require('./routes/courseModuleItem')
const lectureRouter = require('./routes/lecture');


app.get('/', (req, res) => {
    res.send('<h1>Hi LMS backend is running fine </h1>')
})

app.use('/users', user)
app.use('/courses', course)
app.use('/courses/:courseId/modules', courseModule);
app.use('/courses/:courseId/modules/:moduleId/module-item', courseModuleItem);
app.use('/courses/:courseId/lectures', lectureRouter);
app.use('/assignment', assignment);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Server is running on PORT :  ' + port)
})