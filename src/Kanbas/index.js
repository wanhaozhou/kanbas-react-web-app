import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";


import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './KanbasNavigation';
import { courses as dbCourses } from './Database';

import './index.css';

const Kanbas = () => {
    const [courses, setCourses] = useState(dbCourses);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([
            ...courses,
            {
                ...course,
                _id: new Date().getTime()
            }
        ]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div className='wd-root-container'>
            <div className='d-none d-md-block'>
                <KanbasNavigation />
            </div>
            <div className='container-fluid ms-3 me-1' style={{ minWidth: '0%' }}>
                <Routes>
                    <Route path='/' element={<Navigate to='Dashboard' />} />
                    <Route path='Account' element={<h1>Account</h1>} />
                    <Route path='Dashboard' element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                        />
                    } />
                    <Route path='Courses/:courseId/*' element={<Courses courses={courses} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;