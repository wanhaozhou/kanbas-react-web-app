import { useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {
    FaQuestionCircle, FaTachometerAlt,
    FaBook, FaCalendarAlt,
    FaInbox, FaRegClock,
    FaYoutube, FaSignOutAlt,
} from 'react-icons/fa';
import { PiUserCircleFill } from 'react-icons/pi';

import './index.css';

const KanbasNavigation = () => {
    const { pathname } = useLocation();
    const accountActive = pathname.includes('Account');
    const accountInactiveLogo = { size: 30, color: 'white', };
    const accountActiveLogo = { size: 30, color: 'grey', };
    const redLogo = { size: 20, color: 'crimson', };
    const textAndLogo = [
        ['Dashboard', <FaTachometerAlt />],
        ['Courses', <FaBook />],
        ['Calendar', <FaCalendarAlt />],
        ['Inbox', <FaInbox />],
        ['History', <FaRegClock />],
        ['Studio', <FaYoutube />],
        ['Commons', <FaSignOutAlt />],
        ['Help', <FaQuestionCircle />],
    ];
    return (
        <ul className='wd-kb-nav-ul'>
            <li className='wd-kb-nav-li'>
                <div>
                    <img className='wd-kb-nav-logo' src='/nu-logo.png' alt='nu logo' />
                </div>
            </li>
            <li className={`wd-kb-nav-li ${accountActive ? 'wd-kb-nav-li-active' : ''}`}>
                {// eslint-disable-next-line
                }<a href=''>
                    <div>
                        <IconContext.Provider value={accountActive ? accountActiveLogo : accountInactiveLogo}>
                            <PiUserCircleFill />
                        </IconContext.Provider>
                    </div>
                    <div>
                        Account
                    </div>
                </a>
            </li>
            {textAndLogo.map((item, index) =>
            (<li className={`wd-kb-nav-li ${pathname.includes(item[0]) ? 'wd-kb-nav-li-active' : ''}`} key={index}>
                {// eslint-disable-next-line
                }<a href=''>
                    <div>
                        <IconContext.Provider value={redLogo}>{item[1]}</IconContext.Provider>
                    </div>
                    <div>
                        {item[0]}
                    </div>
                </a>
            </li>)
            )}
        </ul >
    );
}

export default KanbasNavigation;