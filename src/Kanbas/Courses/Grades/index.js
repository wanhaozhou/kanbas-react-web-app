import { useParams } from 'react-router-dom';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaChevronDown, FaFilter } from 'react-icons/fa'

import { grades, assignments, enrollments, users } from '../../Database';


const Grades = () => {
    const { courseId } = useParams();
    const assignmentsFiltered = assignments.filter((assignment) => assignment.course === courseId);
    const enrollmentsFiltered = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className='col-12 col-md-9 col-xxl-10'>
            <div className='row pb-3' style={{ borderBottom: '2px solid gainsboro' }}>
                <div className='col'>
                    <span className='float-end'>
                        <button type='button' className='btn btn-outline-secondary btn-sm me-2'>
                            <span className='me-2'>
                                <FaFileImport />
                            </span>
                            Import
                        </button>
                        <span className='dropdown me-2'>
                            <button className='btn btn-outline-secondary dropdown-toggle btn-sm' type='button'
                                data-bs-toggle='dropdown' aria-expanded='false'>
                                <span className='me-2'>
                                    <FaFileExport />
                                </span>
                                Export
                            </button>
                            <ul className='dropdown-menu'>
                                <li className='dropdown-item'>Action 1</li>
                                <li className='dropdown-item'>Action 2</li>
                            </ul>
                        </span>
                        <button type='button' className='btn btn-outline-secondary btn-sm'>
                            <FaCog />
                        </button>
                    </span>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-5'>
                    <h5>Student Names</h5>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <FaSearch />
                        </span>
                        <div className='form-floating'>
                            <input type='text' className='form-control' id='search-name'
                                placeholder='Search Students' />
                            <label htmlFor='search-name' style={{ width: '100%' }}>Search Students</label>
                        </div>
                        <span className='input-group-text'>
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
                <div className='col-5'>
                    <h5>Assignment Names</h5>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>
                            <FaSearch />
                        </span>
                        <div className='form-floating'>
                            <input type='text' className='form-control' id='search-assignment'
                                placeholder='Search Assignments' />
                            <label htmlFor='search-assignment' style={{ width: '100%' }}>Search Assignments</label>
                        </div>
                        <span className='input-group-text'>
                            <FaChevronDown />
                        </span>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col'>
                    <button type='button' className='btn btn-outline-secondary text-start'>
                        <span className='me-1'>
                            <FaFilter />
                        </span>
                        Apply Filters
                    </button>
                </div>
            </div>


            <div className='row mt-3'>
                <div className='col mt-3'>
                    <div className='table-responsive'>
                        <table className='table table-striped  table-bordered'>
                            <thead className='table-light text-center'>
                                <tr>
                                    <th className='text-start'>Student Name</th>
                                    {assignmentsFiltered.map(
                                        (assignment, index) => (<th className='text-start' key={index}>{assignment.title}</th>))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {enrollmentsFiltered.map((enrollment, index) => {
                                    const user = users.find((user) => user._id === enrollment.user);
                                    return (
                                        <tr key={index}>
                                            <td className='wd-red'>{user.firstName} {user.lastName}</td>
                                            {assignmentsFiltered.map((assignment, index) => {
                                                const grade = grades.find(
                                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                                return (<td key={index}>{grade?.grade || ''}</td>);
                                            })}
                                        </tr>);
                                })}
                            </tbody></table>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Grades;

