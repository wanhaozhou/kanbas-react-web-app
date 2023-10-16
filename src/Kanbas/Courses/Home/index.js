

import ModuleList from "../Modules/ModuleList";
import Status from "../Status";

const Home = () => {
    return (
        <>
            <div className="col-12 col-md-9 col-xxl-7">
                <ModuleList />
            </div>
            <div className="d-none d-xxl-block col">
                <Status />
            </div>
        </>
    );
}
export default Home;
