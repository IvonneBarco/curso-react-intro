import { useState } from 'react';
import { TodoProvider } from '../TodoContext';
import './App.css';
import { AppUI } from './AppUI';

function App() {

  const [state, setState] = useState('estado compartido');
  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({ children }) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}


function TodoSearch() {
  return <p>Todo Search</p>;
}

function TodoItem({ state }) {
  return <p>Todo Item: {state}</p>;
}
// function App() {

//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
