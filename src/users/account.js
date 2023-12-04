import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, [id]);

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    const parseDate = (date) => {
        try {
            const dateString = new Date(date).toISOString().split('T')[0];
            return dateString;
        } catch (e) {
            return '';
        }
    }

    return (
        <div className="w-50">
            <h1>Account</h1>
            {!account && <div className="alert alert-danger">Please Signin</div>}
            {account && (
                <div>
                    <p>Username: {account.username}</p>
                    <label>
                        Password
                        <input
                            className="form-control"
                            value={account.password}
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                    </label>
                    <br />
                    <label>
                        First Name
                        <input
                            className="form-control"
                            value={account.firstName}
                            onChange={(e) => setAccount({
                                ...account,
                                firstName: e.target.value
                            })} />
                    </label>
                    <br />

                    <label>
                        Last Name
                        <input
                            className="form-control"
                            value={account.lastName}
                            onChange={(e) => setAccount({
                                ...account,
                                lastName: e.target.value
                            })} />
                    </label>
                    <br />

                    <label>
                        Date of Birth
                        <input
                            className="form-control"
                            value={parseDate(account.dob)}
                            type="date"
                            onChange={(e) => setAccount({
                                ...account,
                                dob: e.target.value
                            })} />
                    </label>
                    <br />

                    <label>
                        Email
                        <input
                            className="form-control"
                            value={account.email}
                            onChange={(e) => setAccount({
                                ...account,
                                email: e.target.value
                            })} />
                    </label>
                    <br />

                    <label>
                        Role
                        <select
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                role: e.target.value
                            })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </label>
                    <br />

                    <button className="mt-2 btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button className="mt-2 btn btn-danger" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/project/admin/users" className="mt-2 btn btn-warning w-100">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;

