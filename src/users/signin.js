import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as client from "./client";

const Signin = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };

    return (
        <div>
            <h1>Signin</h1>
            <input
                className="form-control"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                placeholder="username"
            />
            <input
                className="form-control mb-3"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="password"
            />
            <button className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;