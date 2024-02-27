import './CreateTodoButton.css'
function CreateTodoButton({ setOpenModal }) {
    return (
        <button
            className='btn-create'
            onClick={() => { setOpenModal(state => !state) }}
        >
            +
        </button>
    )
}

export { CreateTodoButton };