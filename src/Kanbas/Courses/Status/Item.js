

const Item = ({ title, detail }) => {
    return (
        <>
            <div class="wd-red" >
                {title}
            </div>
            <p>{detail}</p>
        </>
    );
}

export default Item;