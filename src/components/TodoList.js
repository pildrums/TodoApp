import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle, onImportant}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id} 
          onRemove={onRemove}
          onToggle={onToggle}
          onImportant={onImportant}
        />
      ))}
    </div>
  );
};

export default TodoList;