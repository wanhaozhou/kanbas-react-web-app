import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './KanbasNavigation';

import './index.css';

const Kanbas = () => {
    return (
        <div className='wd-root-container'>
            <div className='d-none d-md-block'>
                <KanbasNavigation />
            </div>
            <div className='container-fluid ms-3 me-1' style={{ minWidth: '0%' }}>
                <Routes>
                    <Route path='/' element={<Navigate to='Dashboard' />} />
                    <Route path='Account' element={<h1>Account</h1>} />
                    <Route path='Dashboard' element={<Dashboard />} />
                    <Route path='Courses/:courseId/*' element={<Courses />} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;