import React, {useRef} from 'react';
import './NewTodoList.css'

type NewTodoProps = {
  onAddTodo: (text: string) => void;
} 

const NewTodoList: React.FC<NewTodoProps> = props => {

  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO </button>
    </form>
  );
}

export default NewTodoList