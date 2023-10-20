import { Link, useParams } from 'react-router-dom';
import {
    FaPlus, FaEllipsisV,
    FaGripVertical, FaEdit,
    FaCheckCircle,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { assignments } from '../../Database';

const Assignments = () => {
    const { courseId } = useParams();
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    return (
        <div className='col-12 col-md-9 col-xxl-10'>
            <div className='row pb-3' style={{ borderBottom: '1px solid gainsboro' }}>
                <input className='form-control w-25' type='text' placeholder='Search for Assignments' />
                <div className='col'>
                    <span className='float-end'>
                        <button type='button' className='btn btn-outline-secondary btn-sm me-1'>
                            <span className='me-2'>
                                <FaPlus />
                            </span>
                            Group
                        </button>
                        <button type='button' className='btn btn-danger  btn-sm me-1'>
                            <span className='me-2'>
                                <FaPlus />
                            </span>
                            Assignment
                        </button>
                        <button type='button' className='btn btn-outline-secondary btn-sm'>
                            <FaEllipsisV />
                        </button>
                    </span>
                </div>
            </div>
            <div className='mt-3'>
                <ul className='list-group mb-4 wd-no-radius'>
                    <li className='list-group-item list-group-item-secondary'>
                        <span className='me-2'>
                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                <FaGripVertical />
                            </IconContext.Provider>
                        </span>
                        Assignments
                        <span className='float-end'>
                            <span className='me-2 border border-dark rounded-4 p-1'>
                                40% of Total
                            </span>
                            <span className='me-2'>
                                <IconContext.Provider value={{ size: 20 }}>
                                    <FaPlus />
                                </IconContext.Provider>
                            </span>
                            <span className='me-2'>
                                <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                    <FaEllipsisV />
                                </IconContext.Provider>
                            </span>
                        </span>
                    </li>
                    {courseAssignments.map((assignment, index) => (
                        <li key={index} className='list-group-item d-flex pe-4 wd-assignment-border'>
                            <div className='col-2 col-md-2 col-xl-1 my-auto'>
                                <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                    <FaGripVertical />
                                </IconContext.Provider>
                                <span className='ms-2 text-success'>
                                    <IconContext.Provider value={{ size: 20 }}>
                                        <FaEdit />
                                    </IconContext.Provider>
                                </span>
                            </div>
                            <div className='col-8 col-md-8 col-xl-10'>
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    <h5 className='m-0'>{assignment.title} </h5>
                                </Link>
                                <p className='m-0 text-secondary'>
                                    Week 0 Setup | Week starting on Monday September 5th
                                </p>
                                <p className='m-0 text-secondary'>Due Sep 18, 2022 | 100 pts</p>
                            </div>
                            <div className='col my-auto'>
                                <div className='float-end'>
                                    <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                        <FaCheckCircle />
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                        <FaEllipsisV />
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Assignments;
