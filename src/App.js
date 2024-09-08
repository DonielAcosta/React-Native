import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>  
      <TodoSearch/> 

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/> 

    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>pp</span>
      <p>pruebas con react</p>
      <span>X</span>

    </li>
  );
}
export default App;
