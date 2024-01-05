import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'tarea uno', completed: true  },
  { text: 'tarea dos', completed: true  },
  { text: 'tarea tres', completed: false  },
  { text: 'NADA', completed: false  },
  { text: 'tarea cinco', completed: true  },
];

function App() {
  const [todos, setTodos] = React.useState (defaultTodos);
  console.log('Este es el valor ' + setTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Este es el valor ' + searchValue);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const serchedTodos = todos.filter (
      (todo) => {
        return todo.text.toLowerCase().includes (searchValue.toLowerCase());
      }
  );

    return ( 
        <>
          <TodoCounter 
          completed={completedTodos}
          total={totalTodos}
          />

          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />

          <TodoList>
            {serchedTodos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
            
          </TodoList>

         <TodoButton />
        </>
    );
}







export default App;