import {
    FaBan, FaCheckCircle,
    FaFileImport, FaUpload,
    FaCrosshairs, FaChartBar,
    FaBullhorn, FaChartLine,
    FaBell, FaCalendarAlt
} from 'react-icons/fa';

import Item from './Item';

const Status = () => {

    const options = [
        [<FaFileImport />, 'Import Existing Content'],
        [<FaUpload />, 'Import From Commons'],
        [<FaCrosshairs />, 'Choose Home Page'],
        [<FaChartBar />, 'View Course Stream'],
        [<FaBullhorn />, 'New Announcement'],
        [<FaChartLine />, 'New Analytics'],
        [<FaBell />, 'View Course Notifications'],
    ]

    const comingUp = [
        ['Lecture CS4550.12631.202410', 'Sep 7 at 11:45am'],
        ['Lecture CS4550.12631.202410', 'Sep 11 at 11:45am'],
        ['CS5610 06 SP23 Lecture', 'Sep 11 at 6pm'],
    ]

    return (
        <>
            <h4>Course Status</h4>
            <div className="row mb-2">
                <span>
                    <button type="button" className="btn btn-outline-secondary btn-sm me-2">
                        <span className='me-1'>
                            <FaBan />
                        </span>
                        Unpublish
                    </button>
                    <button type="button" className="btn btn-success btn-sm">
                        <span className='me-1'>
                            <FaCheckCircle />
                        </span>
                        Published
                    </button>
                </span>
            </div>

            <div className="list-group mb-3 wd-no-radius">
                {options.map((item, index) => (
                    <div key={index} className="list-group-item list-group-item-action list-group-item-secondary mb-1">
                        <span className='me-2'>
                            {item[0]}
                        </span>
                        {item[1]}
                    </div>
                ))}
            </div>

            <div className="row mb-2" style={{ borderBottom: '1px solid gainsboro' }}>
                <h5 className='p-0'>Todo</h5>
            </div>
            <div>
                <Item title='Grade A1' detail='100 points. Sep 18' />
            </div>

            <div className="row mb-2" style={{ borderBottom: '1px solid gainsboro' }}>
                <span className='p-0'>
                    <h5 className='p-0' style={{ display: 'inline' }}>Coming up</h5>
                    <span className="float-end">
                        <small>
                            <FaCalendarAlt />
                            View Calendar
                        </small>
                    </span>
                </span>
            </div>
            <div>
                {comingUp.map(
                    (item, index) => (
                        <Item key={index} title={item[0]} detail={item[1]} />
                    )
                )}
            </div>
        </>
    );
}

export default Status;
