import React from "react";
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./modulesReducer";


const ModuleList = () => {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            <div className='row pb-3'>
                <div className='col'>
                    <div className='float-end'>
                        <button type='button' className='btn btn-outline-secondary btn-sm me-1'>
                            Collapse All
                        </button>
                        <button type='button' className='btn btn-outline-secondary btn-sm me-1'>
                            View Progress
                        </button>
                        <span className='dropdown me-1'>
                            <button className='btn btn-outline-secondary dropdown-toggle btn-sm'
                                type='button'
                                data-bs-toggle='dropdown'>
                                <span className='me-1' style={{ color: 'green' }}>
                                    <FaCheckCircle />
                                </span>
                                Publish All
                            </button>
                            <ul className='dropdown-menu'>
                                <li className='dropdown-item'>Option 1</li>
                                <li className='dropdown-item'>Option 2</li>
                            </ul>
                        </span>
                        <button type='button' className='btn btn-danger btn-sm me-1'>
                            Module
                        </button>
                        <button type='button' className='btn btn-outline-secondary btn-sm me-1'>
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
            </div>
            <div className='row pb-3' style={{ borderBottom: '1px solid gainsboro' }}>
                <form>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="module-name" className="col-form-label">Name</label>
                        </div>
                        <div className="col-6">
                            <input
                                className="form-control"
                                id="module-name"
                                value={module.name}
                                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success me-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))} >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="module-description" className="col-form-label">Description</label>
                        </div>
                        <div className="col-6">
                            <textarea
                                className="form-control"
                                id="module-description"
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                                value={module.description}
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary me-2" onClick={() => dispatch(updateModule(module))}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-3'>
                {
                    modules
                        .filter((m) => m.course === courseId)
                        .map((m, index) => (
                            <ul key={index} className='list-group mb-4 wd-no-radius'>
                                <li className='list-group-item list-group-item-secondary'>
                                    <span className='me-2'>
                                        <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                            <FaGripVertical />
                                        </IconContext.Provider>
                                    </span>
                                    {m.name}
                                    <span className='float-end'>
                                        <button className="btn btn-danger btn-sm me-2"
                                            onClick={() => dispatch(deleteModule(m._id))}>
                                            Delete
                                        </button>
                                        <button className="btn btn-success btn-sm me-2"
                                            onClick={() => dispatch(setModule(m))}>
                                            Edit
                                        </button>
                                        <span className='me-2'>
                                            <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                        </span>
                                        <span className='me-2'>
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
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
                                <li className='list-group-item'>
                                    <span className='me-2'>
                                        <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                            <FaGripVertical />
                                        </IconContext.Provider>
                                    </span>
                                    <span className='ms-2'>
                                        {m.description}
                                    </span>
                                    <span className='float-end'>
                                        <span className='me-2'>
                                            <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                        </span>
                                        <span className='me-2'>
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaEllipsisV />
                                            </IconContext.Provider>
                                        </span>
                                    </span>
                                </li>
                            </ul >
                        ))}
            </div >
        </>
    );
}

export default ModuleList;
