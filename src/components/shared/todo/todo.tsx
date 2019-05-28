import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid/v4";

import "./todo.scss";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    return (
        <div className="todos">
            <input
                type="text"
                placeholder="Add todo task..."
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
                onKeyDown={e => {
                    if (e.key === "Enter" && e.currentTarget.value.length > 0) {
                        setTodos([...todos, { text: e.currentTarget.value, id: uuid() }]);
                        setValue("");
                    }
                }}
            />
            <div className="list">
                <h3>Tasks:</h3>
                <TransitionGroup component="ul">
                    {todos.map(todo => (
                        <CSSTransition key={todo.id} timeout={1000} classNames="todo-item">
                            <li
                                onClick={() =>
                                    setTodos(todos.filter(savedTodo => todo.id !== savedTodo.id))
                                }
                            >
                                {todo.text}
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Todo;
