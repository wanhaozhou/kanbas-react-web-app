import { useState, useEffect } from "react";
import axios from "axios";


const WorkingWithObjects = () => {

    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
    const URL = `${API_BASE}/a5/assignment`;

    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    const updateTitle = async () => {
        const response = await axios
            .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };


    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>3.2.1 Retrieving Objects</h4>
            <a href={`${API_BASE}/a5/assignment`}
                className="btn btn-primary me-2">
                Get Assignment
            </a>

            <h4>3.2.2 Retrieving Properties</h4>
            <a
                href={`${API_BASE}/a5/assignment/title`}
                className="btn btn-primary me-2">
                Get Title
            </a>

            <h4>3.2.3 & 3.2.4 Modifying Properties</h4>
            <a
                href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Title
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title}
                className="form-control mb-2 w-75"
                type="text"
            />
            <a
                href={`${URL}/score/${assignment.score}`}
                className="btn btn-primary me-2 float-end"
            >
                Update Score
            </a>
            <input
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: e.target.value
                })}
                value={assignment.score}
                className="form-control mb-2 w-75"
                type="number"
            />
            <a
                href={`${URL}/completed/${assignment.completed}`}
                className="btn btn-primary me-2 float-end mb-2"
            >
                Update Completed
            </a>
            <input
                className="mb-2"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: !assignment.completed
                })}
                checked={assignment.completed}
                type="checkbox"
            />

            <h4>3.4.4 Fetching and updating objects</h4>
            <button onClick={updateTitle}
                className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment}
                className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>

        </div>
    );
}
export default WorkingWithObjects;

