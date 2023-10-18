

const MobileCourseNav = ({ turnOff }) => {
    return (
        <>
            <h1>Mobile Course Nav</h1>
            <button type="button" className="btn btn-danger" onClick={turnOff} >
                Close
            </button>
        </>
    );
}

export default MobileCourseNav;