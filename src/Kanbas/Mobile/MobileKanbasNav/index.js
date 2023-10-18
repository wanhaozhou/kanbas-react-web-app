
const MobileKanbasNav = ({ turnOff }) => {
    return (
        <>
            <h1 >Mobile Kanbas Nav</h1>
            <button type="button" className="btn btn-danger" onClick={turnOff} >
                Close
            </button>
        </>
    );
}

export default MobileKanbasNav;