import React from 'react';
import './TodoList.css';

interface TodoListProps {
    items: {id: number, texto: string}[];
    onDeleteTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = props => {
    
  return (
    <ul>
        {props.items.map((
          item => <li key={item.id}>
            <span>{item.texto}</span> 
            <button onClick={props.onDeleteTodo.bind(null, item.id)}>DELETE</button>
          </li>))}
    </ul>
  );
}

export default TodoList