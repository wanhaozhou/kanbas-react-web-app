import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaEllipsisV, FaRegEdit } from 'react-icons/fa';

import { courses } from '../Database';


const Dashboard = () => {
    return (
        <>
            <div className='row wd-margin-top-sm'>
                <h1>Dashboard</h1>
            </div>
            <div className='row wd-margin-top-sm'>
                <hr />
            </div>
            <div className='row wd-margin-top-sm'>
                <h2>Published Courses ({courses.length})</h2>
            </div>
            <div className='row flex-row flex-wrap'>
                {courses.map((item, index) => (
                    <div className='col col-xl-3 col-lg-4 col-md-6 col-sm-12' key={index}>
                        <div className='card wd-margin-top-md wd-card-width'>
                            <div className='wd-card-img-button'>
                                <IconContext.Provider value={{ color: 'whitesmoke' }}>
                                    <FaEllipsisV />
                                </IconContext.Provider>
                            </div>
                            <img className='card-img-top' src='/logo1024.png' alt='React'></img>
                            <div className='card-body'>
                                <Link key={item._id} to={`/Kanbas/Courses/${item._id}`} className='list-group-item card-title' style={{ color: 'rgb(23, 112, 171)' }}>
                                    {item.name}
                                </Link>
                                <p className='card-subtitle'>
                                    {item.number}
                                </p>
                                <p className='card-text'>
                                    <small>{item.startDate} - {item.endDate}</small>
                                </p>
                                {/* TODO Link? */}
                                <IconContext.Provider value={{ color: 'crimson', size: 20 }}>
                                    <FaRegEdit />
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


export default Dashboard;
