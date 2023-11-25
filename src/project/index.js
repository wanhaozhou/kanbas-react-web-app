import { Routes, Route, Navigate } from "react-router-dom";

import Signin from "../users/signin";
import Account from "../users/account";
import ProjectNav from './ProjectNav';
import UserTable from "../users/table";
import Signup from "../users/signup";

const Project = () => {
    return (
        <div className="row">
            <div className="col-2">
                <ProjectNav />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="account" element={<Account />} />
                    <Route path="account/:id" element={<Account />} />
                    <Route path="admin/users" element={<UserTable />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;