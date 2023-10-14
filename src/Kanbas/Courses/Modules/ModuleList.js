import React from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa';

import { modules } from "../../Database";

const ModuleList = () => {
    const { courseId } = useParams();
    console.log(modules);
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
                <ul className="list-group mb-4 wd-no-radius">
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module, index) => (
                                <li key={index} className="list-group-item list-group-item-secondary">
                                    <p>{module.name}</p>
                                    <p>{module.description}</p>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </>
    );
}

export default ModuleList;

/*

<li class="list-group-item list-group-item-secondary">
                                <span class="me-2">
                                    <i class="fas fa-grip-vertical wd-gray"></i>
                                </span>
                                Week 0 - Intro
                                <span class="float-end">
                                    <span class="me-2">
                                        <i class="fas fa-check-circle" style="color: green;"></i>
                                    </span>
                                    <span class="me-2">
                                        <i class="fas fa-plus"></i>
                                    </span>
                                    <span class="me-2">
                                        <i class="fas fa-ellipsis-v" style="color: gray;"></i>
                                    </span>
                                </span>
                            </li>



*/