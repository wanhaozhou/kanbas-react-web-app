import { Routes, Route, Navigate } from "react-router";

import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";

const Labs = () => {
    return (
        <div className="container">
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="a3" />} />
                <Route path="a3" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4 />} />
            </Routes>

        </div>
    );
}
export default Labs;

