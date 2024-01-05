import './TodoList.css';

function TodoList(props) {
    return ( 
        <ul className='WrappListTodos'>
          {props.children}
        </ul>
    );

}

export { TodoList };