import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import axios from "axios";

import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './KanbasNavigation';
import store from "./store";
import NotFound from './NotFound';

import './index.css';

const Kanbas = () => {
    const URL = "http://localhost:4000/api/courses";

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    });

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        try {
            const response = await axios.post(URL, course);
            setCourses([
                response.data,
                ...courses,
            ]);
        } catch (error) {

        }
    };

    const deleteCourse = async (courseId) => {
        await axios.delete(`${URL}/${courseId}`);
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const updateCourse = async () => {
        await axios.put(`${URL}/${course._id}`, course);
        setCourses(courses.map((c) => c._id === course._id ? course : c));
    };

    return (
        <Provider store={store}>
            <div className='wd-root-container'>
                <div className='d-none d-md-block'>
                    <KanbasNavigation />
                </div>
                <div className='container-fluid ms-3 me-1' style={{ minWidth: '0%' }}>
                    <Routes>
                        <Route path='/' element={<Navigate to='Dashboard' />} />
                        <Route path='404' element={<NotFound />} />
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
        </Provider>
    );
}

export default Kanbas;