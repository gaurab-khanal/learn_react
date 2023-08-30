import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa";



// eslint-disable-next-line react/prop-types
function Icon({name}){
    switch (name) {
        case "circle":
            return <FaRegCircle className="icons"/>
            
        case "cross":
            return <FaTimes className="icons"/>
            
        default:
            return <FaPen className="icons"/>
    }    
}

export default Icon;