import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import { FaBars, FaGlasses } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { useSelector } from 'react-redux';

import CourseNavigation from './CourseNavigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';
import Grades from './Grades';
import Mobile from '../Mobile';
import MobileCourseNav from '../Mobile/MobileCourseNav';
import MobileKanbasNav from '../Mobile/MobileKanbasNav';


const Courses = ({ courses }) => {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId || course._id === parseInt(courseId));

    const location = useLocation();
    const locations = location.pathname.split('/');
    const assignmentEdit = locations.length >= 2 && locations.at(-2) === 'Assignments';

    const [mobileKanbasNav, setMobileKanbasNav] = useState(false);
    const turnOnMobileKanbasNav = () => {
        setMobileCourseNav(false);
        setMobileKanbasNav(true);
    }
    const turnOffMobileKanbasNav = () => setMobileKanbasNav(false);

    const [mobileCourseNav, setMobileCourseNav] = useState(false);
    const turnOnMobileCourseNav = () => {
        setMobileKanbasNav(false);
        setMobileCourseNav(true);
    }
    const turnOffMobileCourseNav = () => setMobileCourseNav(false);

    const bootstrapMd = 768;
    const { width } = useWindowSize();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignmentName = assignmentEdit ? assignments.filter(item => item._id === locations.at(-1))[0]?.title : '';

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
                                        {course?._id}
                                    </span>
                                    <span className='wd-red' >
                                        {course?.name}
                                    </span>
                                </li>
                                {assignmentEdit ?
                                    <li className='breadcrumb-item'>
                                        <span className='wd-red' >
                                            {locations.at(-2)}
                                        </span>
                                    </li> :
                                    <></>
                                }
                                <li className='breadcrumb-item active' aria-current='page'>{
                                    decodeURI(locations.at(-1)) === 'new' ? 'New assignment' : (decodeURI(locations.at(-1)) + ' ' + assignmentName)
                                }</li>
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
            {!mobileKanbasNav &&
                <div className='d-block d-md-none mt-2 mb-3 ps-2 pe-2 pt-2 pb-1 bg-black'>
                    <Mobile
                        courseId={course?._id}
                        courseName={course?.name}
                        turnOnKanbas={turnOnMobileKanbasNav}
                        turnOnCourse={turnOnMobileCourseNav}
                        mobileCourseNav={mobileCourseNav}
                        turnOffCourse={turnOffMobileCourseNav}
                    />
                </div>
            }

            {mobileKanbasNav && width < bootstrapMd &&
                <MobileKanbasNav turnOff={turnOffMobileKanbasNav} />
            }

            {mobileCourseNav && !mobileKanbasNav && width < bootstrapMd &&
                <MobileCourseNav />
            }

            {((width < bootstrapMd && !mobileCourseNav && !mobileKanbasNav) || (width >= bootstrapMd)) &&
                <div className='row mt-2'>
                    <div className='d-none d-md-block col-md-3 col-xxl-2' style={{ maxWidth: '250px' }}>
                        <CourseNavigation />
                    </div>
                    <>
                        <Routes>
                            <Route path='/' element={<Navigate to='Home' />} />
                            <Route path='Home' element={<Home />} />
                            <Route path='Modules' element={<Modules />} />
                            <Route path='Assignments' element={<Assignments />} />
                            <Route path='Assignments/:assignmentId' element={<AssignmentEditor />} />
                            <Route path='Grades' element={<Grades />} />
                        </Routes>
                    </>
                </div>
            }
        </>
    );
}

export default Courses;