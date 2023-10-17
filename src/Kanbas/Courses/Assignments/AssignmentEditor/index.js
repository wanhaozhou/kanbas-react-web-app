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
                            defaultValue='This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.'
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
                            <label htmlFor="assignment-group" className="col-form-label">Assignment Group</label>
                        </div>
                        <div className="col-8 col-lg-6">
                            <select className="form-select" id="assignment-group">
                                <option>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-display-grade" className="col-form-label">Display Grade
                                as</label>
                        </div>
                        <div className="col-8 col-lg-6">
                            <select className="form-select" id="assignment-display-grade">
                                <option>Percentage</option>
                            </select>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue=""
                                    id="assignment-do-not-count" />
                                <label className="form-check-label" htmlFor="assignment-do-not-count">
                                    Do not count this assignment towards the final grade
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-submission-type" className="col-form-label">Submission
                                Type</label>
                        </div>
                        <div className="ms-2 col-8 col-lg-6 border wd-border-light-gray rounded p-3">
                            <select className="form-select w-50" id="assignment-submission-type">
                                <option>Online</option>
                            </select>
                            <h5 className="my-3">Online Entry Options</h5>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="text-entry"
                                    defaultChecked />
                                <label className="form-check-label" htmlFor="text-entry">
                                    Text Entry
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="web" defaultChecked />
                                <label className="form-check-label" htmlFor="web">
                                    Website URL
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="media" defaultChecked />
                                <label className="form-check-label" htmlFor="media" >
                                    Media Recordings
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="annotation" />
                                <label className="form-check-label" htmlFor="annotation" >
                                    Student Annotation
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="file" />
                                <label className="form-check-label" htmlFor="file" >
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-assign" className="col-form-label">Assign</label>
                        </div>
                        <div className="ms-2 col-8 col-lg-6 border wd-border-light-gray rounded p-0">
                            <div className="px-3">
                                <h5 className="my-3">Assign to</h5>
                                <div className="form-control p-2">
                                    <span className="badge wd-black p-2"
                                        style={{ backgroundColor: 'gainsboro', fontWeight: '100' }}>
                                        Everyone
                                        <span className="ms-3">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </span>
                                </div>
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
                            <div className="text-center rounded-bottom p-3"
                                style={{ backgroundColor: 'gainsboro', marginLeft: 0 }}>
                                <i className="fas fa-plus"></i> Add
                            </div>
                        </div>

                    </div>
                </form>
            </div >

            <div className="row pt-3" style={{ borderTop: '1px solid gainsboro' }}>
                <div className="col">
                    <input className="form-check-input mx-2" type="checkbox" defaultValue="" id="assignment-notify" />
                    <label className="form-check-label" htmlFor="assignment-notify">
                        Notify users that this content has changed.
                    </label>
                    <span className="float-end">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-outline-secondary">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-danger ms-2">
                            Save
                        </button>
                    </span>
                </div>
            </div>

        </div >
    );
}


export default AssignmentEditor;
