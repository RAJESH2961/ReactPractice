import propTypes from 'prop-types'
import styles from './Student.module.css'

function Student(props){
    return(
        <div className={styles.student}>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Is Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
//to check prevented unproper datattype
Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool,
}

//to give the default values
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false,
}


export default Student