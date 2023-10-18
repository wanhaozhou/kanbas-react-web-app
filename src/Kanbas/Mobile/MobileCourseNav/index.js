import {
    FaBook, FaBookmark,
    FaBullhorn, FaRegCircle,
    FaCog, FaComments,
    FaCrosshairs, FaFile,
    FaFolder, FaHome,
    FaNetworkWired, FaPlug,
    FaRocket, FaStickyNote,
    FaThList, FaUserFriends
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const MobileCourseNav = () => {

    const items = [
        ['Home', <FaHome />],
        ['Modules', <FaNetworkWired />],
        ['Piazza', <FaPlug />],
        ['Zoom Meetings', <FaPlug />],
        ['Assignments', <FaBook />],
        ['Quizzes', <FaRocket />],
        ['Grades', <FaStickyNote />],
        ['People', <FaUserFriends />],
        ['Panopto Video', <FaPlug />],
        ['Discussions', <FaComments />],
        ['Announcements', <FaBullhorn />],
        ['Pages', <FaFile />],
        ['Files', <FaFolder />],
        ['Rubrics', <FaThList />],
        ['Outcomes', <FaCrosshairs />],
        ['Collaborations', <FaRegCircle />],
        ['Syllabus', <FaBookmark />],
        ['Settings', <FaCog />],
    ];

    return (
        <ul className="list-group">
            {items.map((it, index) => (
                <li key={index} className="list-group-item border-0">
                    <span className='wd-red'>
                        <span className='me-2'>
                            <IconContext.Provider value={{ size: 22 }}>
                                {it[1]}
                            </IconContext.Provider>
                        </span>
                        {it[0]}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default MobileCourseNav;