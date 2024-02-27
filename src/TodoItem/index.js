import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';
import './TodoItem.css'
function TodoItem(props) {

    return (
        <>
            <li className='todo-item'>
                {/* <span
                    className={`icon-complete ${props.completed && "icon-complete-active"}`}
                    onClick={props.onComplete}

                >
                    V {props.completed}
                </span> */}
                <CompleteIcon
                    completed={props.completed}
                    onComplete={props.onComplete} />

                <p className={`text-todo ${props.completed && "text-todo-complete"}`}>{props.text} </p>
                {/* <span className='icon-close' onClick={props.onDelete}>X</span> */}
                <DeleteIcon 
                    onDelete={props.onDelete}/>
            </li >
        </>
    );
}
export { TodoItem };
