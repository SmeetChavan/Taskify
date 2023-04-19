import { useState } from "react";

import {AiFillDelete , AiOutlineEdit} from 'react-icons/ai'

function Task({todo , todoArray , setToDoArray , edit , setEdit}) {

    const [checked , setChecked] = useState(false); 

    const toggle = () => {
        setChecked(checked ^ true);
    }

    const handleDelete = ({id}) => {
        setToDoArray(todoArray.filter((todo) => todo.id !== id));
    }

    const toggleEdit = ({id}) => {

        if(edit === null){
            setEdit(id);
        }
        else{
            setEdit(null);
        }
    }

    return (
        <section className="task">

            <input type="checkbox" name="todoCheck" className="checkbox" onClick={toggle}/>
            <div className={checked ? "checkedTitle" : "title"}>{todo.title}</div>

            <div className="edit" onClick={() => toggleEdit(todo)}><AiOutlineEdit/></div>
            <div className="delete" onClick={() => handleDelete(todo)}><AiFillDelete/></div>

        </section>
    );
}

export default Task;