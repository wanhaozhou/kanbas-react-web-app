import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as client from "./client";

const Signin = () => {

    const [error, setError] = useState(null);

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const signin = async () => {
        const resp = await client.signin(credentials);
        console.log(resp);
        if (!resp) {
            setError("Username or password is incorrect");
        } else {
            setError(null);
            navigate("/project/account");
        }
    };

    return (
        <div>
            <h1>Signin</h1>
            {error && <div className="alert alert-danger">{error}</div>}
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