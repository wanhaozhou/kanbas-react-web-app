

const Item = ({ title, detail }) => {
    return (
        <>
            <div className='wd-red' >
                {title}
            </div>
            <p>{detail}</p>
        </>
    );
}

export default Item;