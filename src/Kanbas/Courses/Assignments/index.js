import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    FaPlus, FaEllipsisV,
    FaGripVertical, FaEdit,
    FaCheckCircle, FaRegTrashAlt,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';

import { deleteAssignment, selectAssignment } from "./assignmentsReducer";


const Assignments = () => {
    const { courseId } = useParams();

    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    const [id, setId] = useState(-1);
    const [show, setShow] = useState(false);

    return (
        <>
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
                            <Link
                                to={`/Kanbas/Courses/${courseId}/Assignments/new`}
                                onClick={() => { dispatch(selectAssignment(false)) }}
                            >
                                <button type='button' className='btn btn-danger  btn-sm me-1'>
                                    <span className='me-2'>
                                        <FaPlus />
                                    </span>
                                    Assignment
                                </button>
                            </Link>
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
                                        <Link
                                            style={{ textDecoration: 'none', color: 'gray' }}
                                            to={`/Kanbas/Courses/${courseId}/Assignments/new`}
                                            onClick={() => { dispatch(selectAssignment(false)) }}
                                        >
                                            <FaPlus />
                                        </Link>
                                    </IconContext.Provider>
                                </span>
                                <span className='me-2'>
                                    <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                        <FaEllipsisV />
                                    </IconContext.Provider>
                                </span>
                            </span>
                        </li>
                        {assignments
                            .filter((assignment) => assignment.course === courseId)
                            .map((assignment, index) => (
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
                                            style={{ textDecoration: 'none', color: 'black' }}
                                            key={assignment._id}
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                            onClick={() => dispatch(selectAssignment(assignment))}
                                        >
                                            <h5 className='m-0'>{assignment.title} </h5>
                                        </Link>
                                        <p className='m-0 text-secondary'>Due Date: {assignment.dueDate || 'N/A'}</p>
                                        <p className='m-0 text-secondary'>Available From: {assignment.availableFromDate || 'N/A'}</p>
                                        <p className='m-0 text-secondary'>Available Until: {assignment.availableUntilDate || 'N/A'}</p>
                                    </div>
                                    <div className='col my-auto'>
                                        <div className='float-end'>
                                            <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaEllipsisV />
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaRegTrashAlt onClick={() => { setId(assignment._id); setShow(true) }} />
                                            </IconContext.Provider>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete the assignment?</Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-secondary' onClick={() => setShow(false)}>
                        No
                    </button>
                    <button className='btn btn-danger' onClick={() => { dispatch(deleteAssignment(id)); setShow(false) }}>
                        Yes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Assignments;
