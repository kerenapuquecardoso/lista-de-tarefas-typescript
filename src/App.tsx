import React, { useState} from 'react'
import TodoList from './components/TodoList';
import NewTodoList from './components/NewTodoList';
import { Todo } from './afazer.model';

const App: React.FC = () => {
    const [aFazer, setAFazer] = useState<Todo[]>([]);
    const todoAddHandler = (text: string) => {
        setAFazer( previaAFazer =>  [...previaAFazer, {id: Math.random(), texto: text}]);
    };

    const todoDeleteHandler = (aFazerId: number) => {
      setAFazer(aFazer => {
        return aFazer.filter(todo => todo.id !== aFazerId);
      });
    };
  return (
    <div className="App">
        <NewTodoList onAddTodo={todoAddHandler}/>
        <TodoList items={aFazer} onDeleteTodo={todoDeleteHandler}/>
    </div>
  )
}

export default App