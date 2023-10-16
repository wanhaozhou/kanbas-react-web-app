import React from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { modules } from "../../Database";

const ModuleList = () => {
    const { courseId } = useParams();
    let modulesFind = modules.filter((module) => module.course === courseId);
    if (modulesFind.length === 0) {
        modulesFind = [
            { name: "Lorem ipsum", description: "Lorem ipsum dolor sit amet adipiscing" },
            { name: "Mi bibendum neque", description: "Mi bibendum neque egestas congue quisque" },
            { name: "Elementum curabitur", description: "Elementum curabitur vitae nunc sed velit" },
        ]
    }
    const sub = [
        "Lorem ipsum dolor sit amet adipiscing",
        "Mi bibendum neque egestas congue quisque",
        "Elementum curabitur vitae nunc sed velit",
    ];
    return (
        <>
            <div className="row pb-3" style={{ borderBottom: '2px solid gainsboro' }}>
                <div className="col">
                    <div className="float-end">
                        <button type="button" className="btn btn-outline-secondary btn-sm me-1">
                            Collapse All
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm me-1">
                            View Progress
                        </button>
                        <button type="button" className="btn btn-danger btn-sm me-1">
                            Module
                        </button>
                        <span className="dropdown me-1">
                            <button className="btn btn-outline-secondary dropdown-toggle btn-sm"
                                type="button"
                                data-bs-toggle="dropdown">
                                <span className="me-1" style={{ color: 'green' }}>
                                    <FaCheckCircle />
                                </span>
                                Publish All
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Option 1</li>
                                <li className="dropdown-item">Option 2</li>
                            </ul>
                        </span>
                        <button type="button" className="btn btn-outline-secondary btn-sm me-1">
                            <FaEllipsisV />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                {
                    modulesFind
                        .map((module, index) => (
                            <ul key={index} className="list-group mb-4 wd-no-radius">
                                <li className="list-group-item list-group-item-secondary">
                                    <span className="me-2">
                                        <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                            <FaGripVertical />
                                        </IconContext.Provider>
                                    </span>
                                    {module.name}
                                    <span className="float-end">
                                        <span className="me-2">
                                            <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                        </span>
                                        <span className="me-2">
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaPlus />
                                            </IconContext.Provider>
                                        </span>
                                        <span className="me-2">
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaEllipsisV />
                                            </IconContext.Provider>
                                        </span>
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <span className="me-2">
                                        <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                            <FaGripVertical />
                                        </IconContext.Provider>
                                    </span>
                                    <span className="ms-2">
                                        {module.description}
                                    </span>
                                    <span className="float-end">
                                        <span className="me-2">
                                            <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                <FaCheckCircle />
                                            </IconContext.Provider>
                                        </span>
                                        <span className="me-2">
                                            <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                <FaEllipsisV />
                                            </IconContext.Provider>
                                        </span>
                                    </span>
                                </li>
                                {
                                    sub.map((submodule, subindex) => (
                                        <li key={subindex} className="list-group-item">
                                            <span className="me-2">
                                                <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                    <FaGripVertical />
                                                </IconContext.Provider>
                                            </span>
                                            <span className="ms-5">
                                                {submodule}
                                            </span>
                                            <span className="float-end">
                                                <span className="me-2">
                                                    <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                                        <FaCheckCircle />
                                                    </IconContext.Provider>
                                                </span>
                                                <span className="me-2">
                                                    <IconContext.Provider value={{ color: 'gray', size: 20 }}>
                                                        <FaEllipsisV />
                                                    </IconContext.Provider>
                                                </span>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul >
                        ))}
            </div >
        </>
    );
}

export default ModuleList;
