import './TodoButton.css';

function TodoButton() {
    return (
        <button 
        className="btnCreate"
        onClick={ (event) => {
            console.log(event.target);
        } } >
        Crear tarea +
        </button>
    );
}

export { TodoButton};