import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { FaBars, FaGlasses } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { courses } from '../../Kanbas/Database';
import CourseNavigation from './CourseNavigation';
import Modules from "./Modules";
import Home from './Home';

const Courses = () => {
    const { courseId } = useParams();
    const location = useLocation();
    const course = courses.find((course) => course._id === courseId);
    return (
        <>
            {/* large screen */}
            <div className='d-none d-md-block mt-2'>
                <div className='row' >
                    <div className='col'>
                        <nav style={{ '--bs-breadcrumb-divider': `'>'` }}>
                            <ol className='breadcrumb wd-inline-flex'>
                                <li className='breadcrumb-item'>
                                    <span className='me-2'>
                                        <IconContext.Provider value={{ color: 'crimson', size: 18 }}>
                                            <FaBars />
                                        </IconContext.Provider>
                                    </span>
                                    <span className='wd-red me-2' >
                                        {course.number}
                                    </span>
                                    <span className='wd-red' >
                                        {course.name}
                                    </span>
                                </li>
                                <li className='breadcrumb-item active' aria-current='page'>{decodeURI(location.pathname.split('/').at(-1))}</li>
                            </ol>
                        </nav>
                    </div>
                    <div className='col'>
                        <div className='float-end pe-3'>
                            <button type='button' className='btn btn-outline-secondary btn-sm'>
                                <span className='me-2'>
                                    <FaGlasses />
                                </span>
                                Student View
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='mt-1' />
            </div>
            {/* small screen */}
            <div className='d-block d-md-none mt-2 mb-3 bg-black ps-2 pe-2 pt-2 pb-1'>
                TODO
            </div>

            <div className='row mt-2'>
                <div className='d-none d-md-block col-md-3 col-xxl-2' style={{ maxWidth: '250px' }}>
                    <CourseNavigation />
                </div>
                <>
                    <Routes>
                        <Route path='/' element={<Navigate to='Home' />} />
                        <Route path='Home' element={<Home />} />
                        <Route path='Modules' element={<Modules />} />
                        <Route path='Assignments' element={<h1>Assignments</h1>} />
                        <Route path='Assignments/:assignmentId' element={<h1>Assignment Editor</h1>} />
                        <Route path='Grades' element={<h1>Grades</h1>} />
                    </Routes>
                </>
            </div>
        </>
    );
}

export default Courses;