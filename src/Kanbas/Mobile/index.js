import { FaBars, FaGlasses, FaChevronDown } from 'react-icons/fa';

const Mobile = ({ courseId, courseName, turnOnKanbas, turnOnCourse }) => {
    return (
        <div className="row text-white">
            <div className="col">
                <FaBars onClick={turnOnKanbas} />
            </div>
            <div className="col">
                <p className="text-center">{`${courseId} ${courseName} Modules`}</p>
            </div>
            <div className="col">
                <span className="float-end">
                    <span className='me-2'>
                        <FaGlasses />
                    </span>
                    <FaChevronDown onClick={turnOnCourse} />
                </span>
            </div>
        </div>
    );
};

export default Mobile;
