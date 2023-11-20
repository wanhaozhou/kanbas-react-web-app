import { useState, useEffect } from "react";
import axios from "axios";

const WorkingWithArrays = () => {
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
    const API = `${API_BASE}/a5/todos`;
    const [errorMessage, setErrorMessage] = useState(null);

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    const removeTodo = async (todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo) => {
        try {
            await axios.delete(
                `${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async () => {
        try {
            await axios.put(
                `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            // setTodo({});
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h3>Working with Arrays</h3>
            <button onClick={createTodo}
                className="btn btn-primary mb-2 w-100">
                3.4.7 Create Todo
            </button>
            <button onClick={updateTitle}
                className="btn btn-success mb-2 w-100">
                3.4.9 Update Title
            </button>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <textarea
                className="form-control"
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description || ''} type="text"
            />
            <input
                className="form-control"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}
                value={todo.due || ''} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    checked={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <br />
            <button
                className="btn btn-warning"
                onClick={postTodo} >
                3.5.1 Post Todo
            </button>
            <button className="btn btn-primary" onClick={updateTodo}>
                3.5.3 Update Todo
            </button>
            <button className="btn btn-danger" onClick={() => { deleteTodo(todo); deleteTodo(todo); }}>
                3.5.4 Delete Todo Twice (shows an error message)
            </button>
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <h4>3.4.5 Fetching Arrays</h4>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        {todo.title}
                        <p>
                            <input
                                checked={todo.completed}
                                type="checkbox" readOnly
                            />
                        </p>
                        <p>{todo.description || ''}</p>
                        <p>{todo.due || ''}</p>
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end" >
                            3.4.8 Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-danger float-end" >
                            3.4.6 Remove (HTTP Get)
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            3.5.2 Delete (HTTP Delete)
                        </button>
                    </li>
                ))}
            </ul>


            <h4>3.3.1 Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary me-2">
                Get Todos
            </a>

            <h4>3.3.2 Retrieving an Item from an Array by ID</h4>
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />

            <a href={`${API}/${todo.id}`}
                className="btn btn-primary me-2">
                Get Todo by ID
            </a>

            <h4>3.3.3 Filtering Array Items</h4>
            <a href={`${API}?completed=true`}
                className="btn btn-primary me-2" >
                Get Completed Todos
            </a>

            <h4>3.3.4 Creating new Items in an Array</h4>
            <a href={`${API}/create`}
                className="btn btn-primary me-2">
                Create Todo
            </a>

            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: e.target.value
                })}
                className="form-control mb-2"
                type="number"
            />
            <h4>3.3.5  Deleting from an Array</h4>
            <a href={`${API}/${todo.id}/delete`}
                className="btn btn-primary me-2">
                Delete Todo with ID = {todo.id}
            </a>

            <input
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <h4>3.3.6 Updating an Item in an Array</h4>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>

            <br />
            <h4>3.3.7 Updating Completed</h4>
            <input
                checked={todo.completed}
                onChange={(e) => {
                    setTodo({
                        ...todo, completed: !todo.completed
                    })
                }}
                type="checkbox"
            />
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary me-2" >
                Update Completed to {String(todo.completed)}
            </a>


            <h4>3.3.7 Updating description</h4>
            <input
                value={todo.description || ''}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })}
                className="form-control mb-2"
                type="text"
            />
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary me-2" >
                Update description to {todo.description || ''}
            </a>

        </div>
    );
}

export default WorkingWithArrays;