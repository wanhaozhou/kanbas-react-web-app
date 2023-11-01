import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { IconContext } from "react-icons";

import { assignments } from "../../../Database";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log(`saving assignment id ${assignmentId} of course ${courseId}`);
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="col-12 col-md-9 col-xxl-10">
            <div className="row pb-3" style={{ borderBottom: '1px solid gainsboro' }}>
                <div className="col">
                    <span className="float-end">
                        <span className="text-success me-2">
                            <span className="me-2">
                                <IconContext.Provider value={{ color: 'green', size: 20 }}>
                                    <FaCheckCircle />
                                </IconContext.Provider>
                            </span>
                            Published
                        </span>
                        <button type="button" className="btn btn-outline-secondary btn-sm ms-2">
                            <IconContext.Provider value={{ size: 16 }}>
                                <FaEllipsisV />
                            </IconContext.Provider>
                        </button>
                    </span>
                </div>
            </div>

            <div className="mt-3">
                <div className="row">
                    <label htmlFor="assignment-name" className="form-label"> Assignment Name</label>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <input defaultValue={assignment.title}
                            className="form-control mb-2" id="assignment-name" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 col-lg-10">
                        <textarea
                            className="form-control"
                            placeholder="This is the assignment description."
                            id="assignment-description"
                            style={{ height: '100px' }}
                            value='
                            New Assignment Description
                            '
                        />
                    </div>
                </div>
                <form>
                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-points" className="col-form-label">Points</label>
                        </div>
                        <div className="col-8 col-lg-6">
                            <input type="number" className="form-control" id="assignment-points" defaultValue="100" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-assign" className="col-form-label">Assign</label>
                        </div>
                        <div className="ms-2 col-8 col-lg-6 border wd-border-light-gray rounded p-0">
                            <div className="px-3">
                                <h5 className="my-3">Due</h5>
                                <input className="form-control" type="date" defaultValue="2021-01-01" />
                                <div className="row my-3">
                                    <div className="col">
                                        <h5 className="my-2">Available from</h5>
                                        <input className="form-control" type="date" defaultValue="2021-01-01" />
                                    </div>
                                    <div className="col">
                                        <h5 className="my-2">Until</h5>
                                        <input className="form-control" type="date" defaultValue="2021-01-01" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div >

            <div className="row pt-3" style={{ borderTop: '1px solid gainsboro' }}>
                <div className="col">
                    <span className="float-end">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-outline-secondary">
                            Cancel
                        </Link>
                        <button onClick={() => handleSave()} className="btn btn-danger ms-2">
                            Save
                        </button>
                    </span>
                </div>
            </div>

        </div >
    );
}


export default AssignmentEditor;
