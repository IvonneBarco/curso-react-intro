import { ReactComponent as CheckSVG } from "../assets/check.svg"
import { ReactComponent as DeleteSVG } from "../assets/delete.svg"
import {  } from "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckSVG className="icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>,
};
function TodoIcon({ type, color, onClick }) {

    return (
        <span 
            className={`Icon icon-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }