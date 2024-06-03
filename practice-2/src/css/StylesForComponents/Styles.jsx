
function Styles(){
    //Inline css
    const buttonStyle = {
        backgroundColor : "red",
        color: "black",
        padding : "10px",
        border : "none",
        borderRadius : "5px",

    }
    const demo ={
        color : "green",
    }
    return(
        <>
        <button style={buttonStyle}>Click Here !</button>
        <p style={demo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa libero molestias quas ipsum ab aperiam iusto sunt illum quos molestiae, temporibus consequuntur aspernatur porro facere earum voluptate reiciendis quibusdam adipisci.</p>
        </>
    );
}

export default Styles