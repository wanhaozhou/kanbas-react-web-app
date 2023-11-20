
import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithObjects from './WorkingWithObjects';
import WorkingWithArrays from './WorkingWithArrays';

const Assignment5 = () => {
    const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${API_BASE}/a5/welcome`}
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <h2>Simple API Examples</h2>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
}

export default Assignment5;