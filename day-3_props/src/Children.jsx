import propTypes from "prop-types" 

function Children(props){
    return(
        <div>{props.children}</div>
    );
}
Children.propTypes = {
    children : propTypes.array,

};

export default Children;