import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";

import { addAssignment, updateAssignment, selectAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();

    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        if (assignmentId === 'new') {
            dispatch(addAssignment({ ...assignment, course: courseId, }));
        } else {
            dispatch(updateAssignment(assignment))
        }
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
                        <input
                            value={assignment.title}
                            className="form-control mb-2" id="assignment-name"
                            onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 col-lg-10">
                        <textarea
                            className="form-control"
                            placeholder="This is the assignment description."
                            id="assignment-description"
                            style={{ height: '100px' }}
                            value={assignment.description}
                            onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
                        />
                    </div>
                </div>
                <form>
                    <div className="row mb-3">
                        <div className="col-3 text-end">
                            <label htmlFor="assignment-assign" className="col-form-label">Assign</label>
                        </div>
                        <div className="ms-2 col-8 col-lg-6 border wd-border-light-gray rounded p-0">
                            <div className="px-3">
                                <h5 className="my-3">Due</h5>
                                <input
                                    className="form-control"
                                    type="date"
                                    value={assignment.dueDate}
                                    onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                                />
                                <div className="row my-3">
                                    <div className="col">
                                        <h5 className="my-2">Available from</h5>
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={assignment.availableFromDate}
                                            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
                                        />
                                    </div>
                                    <div className="col">
                                        <h5 className="my-2">Until</h5>
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={assignment.availableUntilDate}
                                            onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                        />
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
