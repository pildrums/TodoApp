import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline, 
  MdStar,
} from "react-icons/md";
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle, onImportant}) => {
    const {id, text, checked, star} = todo;

    return (
        <div className={cn("TodoListItem", {star})}>
            <div className={cn("checkbox", {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className={cn("important", {star})} onClick={() => onImportant(id)}>
              <MdStar />
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;