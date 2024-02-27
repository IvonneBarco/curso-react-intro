import { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';
function TodoCounter() {
    const {completeTodos, totalTodos} = useContext(TodoContext);
    return (
        <h1 style={{
            fontSize: '24px',
            textAlign: 'center'
        }}>Has completado {completeTodos} de {totalTodos} TODOS</h1>
    )
}

export { TodoCounter };