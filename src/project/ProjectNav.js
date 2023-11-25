import { Link, useLocation } from "react-router-dom";

const ProjectNav = () => {
    const path = useLocation().pathname?.split("/")[2] || 'home';

    return (
        <div className="list-group">
            <Link to='home' className={`list-group-item list-group-item-action ${path === 'home' ? 'active' : ''}`}>
                Home
            </Link>
            <Link to='search' className={`list-group-item list-group-item-action ${path === 'search' ? 'active' : ''}`}>
                Search
            </Link>
            <Link to='signin' className={`list-group-item list-group-item-action ${path === 'signin' ? 'active' : ''}`}>
                Signin
            </Link>
            <Link to='signup' className={`list-group-item list-group-item-action ${path === 'signup' ? 'active' : ''}`}>
                Signup
            </Link>
            <Link to='account' className={`list-group-item list-group-item-action ${path === 'account' ? 'active' : ''}`}>
                Account
            </Link>
        </div>
    );
}

export default ProjectNav;