
const Content = (props) => {
    return(
        <>
            <div>
                <h1 style={{fontSize:40,marginBottom:15}}>{props.heading}</h1>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
            </div>
        </>
    )
};
export default Content;