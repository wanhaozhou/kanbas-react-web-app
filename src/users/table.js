import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

import * as client from "./client";

const UserTable = () => {
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });

    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };



    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group">
                                <input
                                    placeholder="username"
                                    className="form-control"
                                    value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                                <input
                                    placeholder="password"
                                    className="form-control"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                        </td>
                        <td>
                            <input
                                placeholder="first name"
                                className="form-control"
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="last name"
                                className="form-control"
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            />
                        </td>
                        <td>
                            <select className="form-control" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1" />
                            <BsPlusCircleFill className="text-primary fs-1" onClick={createUser} />
                        </td>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <Link to={`/project/account/${user._id}`}>
                                {user.username}
                            </Link>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td className="text-nowrap">
                                <button className="btn btn-warning me-2">
                                    <BsPencil onClick={() => selectUser(user)} />
                                </button>
                                <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>
                            </td>

                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;