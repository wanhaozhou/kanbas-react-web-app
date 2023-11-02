import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaEllipsisV, FaRegEdit } from 'react-icons/fa';

const Dashboard = ({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse
}) => {
    return (
        <>
            <div className='row mt-2'>
                <h1>Dashboard</h1>
            </div>
            <div className='row mt-2 mb-2'>
                <h5>Course</h5>
                <form>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="course-name" className="col-form-label">Course Name</label>
                        </div>
                        <div className="col-6">
                            <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success me-2" onClick={(e) => { e.preventDefault(); addNewCourse(); }} >
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="course-number" className="col-form-label">Course Number</label>
                        </div>
                        <div className="col-6">
                            <input value={course.number} className="form-control" onChange={(e) => { setCourse({ ...course, number: e.target.value }); }} />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); updateCourse(); }} >
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="course-number" className="col-form-label">Start Date</label>
                        </div>
                        <div className="col-6">
                            <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <label htmlFor="course-number" className="col-form-label">Start Date</label>
                        </div>
                        <div className="col-6">
                            <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                        </div>
                    </div>
                </form>

            </div>
            <div className='row mt-2'>
                <hr />
            </div>
            <div className='row mt-1'>
                <h2>Published Courses ({courses.length})</h2>
            </div>
            <div className='row flex-row flex-wrap'>
                {courses.map((item, index) => (
                    <div className='col col-xl-3 col-lg-4 col-md-6 col-sm-12' key={index}>
                        <div className='card mt-3 mb-3 wd-card-width'>
                            <div className='wd-card-img-button'>
                                <IconContext.Provider value={{ color: 'whitesmoke' }}>
                                    <FaEllipsisV />
                                </IconContext.Provider>
                            </div>
                            <img className='card-img-top' src='/logo1024.png' alt='React'></img>
                            <div className='card-body'>
                                <Link
                                    key={item._id}
                                    to={`/Kanbas/Courses/${item._id}`}
                                    className='list-group-item card-title'
                                    style={{ color: 'rgb(23, 112, 171)' }}
                                >
                                    {item.name}
                                </Link>
                                <p className='card-subtitle'>
                                    {item._id}
                                </p>
                                <p className='card-text'>
                                    <small>{item.startDate} - {item.endDate}</small>
                                </p>
                                <IconContext.Provider value={{ color: 'crimson', size: 20 }}>
                                    <FaRegEdit />
                                </IconContext.Provider>
                                <span className='float-end'>
                                    <button className='btn btn-warning btn-sm me-2'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCourse(item);
                                        }}>
                                        Edit
                                    </button>
                                    <button className='btn btn-danger btn-sm'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            deleteCourse(item._id);
                                        }}>
                                        Delete
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


export default Dashboard;
