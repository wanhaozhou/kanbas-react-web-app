
import {
    FaTimes, FaTachometerAlt,
    FaUser, FaChevronRight,
    FaBook, FaCalendarAlt, FaInbox,
    FaYoutube, FaSignOutAlt,
    FaHistory, FaQuestionCircle
} from 'react-icons/fa';
import { IconContext } from 'react-icons';


const MobileKanbasNav = ({ turnOff }) => {
    const items = [
        ['Dashboard', <FaTachometerAlt />],
        ['Account', <FaUser />, <FaChevronRight />],
        ['Courses', <FaBook />, <FaChevronRight />],
        ['Calendar', <FaCalendarAlt />],
        ['Inbox', <FaInbox />],
        ['Studio', <FaYoutube />],
        ['Commons', <FaSignOutAlt />],
        ['History', <FaHistory />, <FaChevronRight />],
        ['Help', <FaQuestionCircle />, <FaChevronRight />],
    ];

    return (
        <ul className="list-group">
            <li className="list-group-item border-0">
                <span className="float-end">
                    <FaTimes onClick={turnOff} />
                </span>
            </li>
            {items.map(
                (it, index) => (
                    it.length === 2 ?
                        (<li key={index} className="list-group-item border-0">
                            <span className='wd-red'>
                                <span className='me-2'>
                                    <IconContext.Provider value={{ size: 22 }}>
                                        {it[1]}
                                    </IconContext.Provider>
                                </span>
                                {it[0]}
                            </span>
                        </li>
                        ) :
                        (<li key={index} className="list-group-item border-0">
                            <span className={`ms-3 wd-red`}>
                                <span className={`me-2 ${it[0] === 'Account' ? 'wd-gray' : ''}`}>
                                    <IconContext.Provider value={{ size: 22 }}>
                                        {it[1]}
                                    </IconContext.Provider>
                                </span>
                                {it[0]}
                            </span>
                            <span className='float-end'>
                                {it[2]}
                            </span>
                        </li>
                        )
                )
            )}
        </ul>
    );
}

export default MobileKanbasNav;