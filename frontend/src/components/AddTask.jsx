import { useEffect } from 'react';
import {v4} from 'uuid';

function AddTask({todoArray , setToDoArray , input , setInput , edit , setEdit}) {

    const handleAdd = () => {

        if(input === ""){
            alert("Please don't add Empty Field");
        }
        else if(edit === null){

            setToDoArray([...todoArray , {id: v4() , title: input}]);
            setInput("");
        }
        else{

            for(let i = 0; i < todoArray.length; i++) {

                if(todoArray[i].id === edit){
                    todoArray[i].title = input;
                    setInput("");
                    setEdit(null);
                }
            }
        }
    }

    useEffect(() => {

        if(edit !== null){

            let editted;

            for(let i = 0 ; i < todoArray.length ; ++i){

                if(todoArray[i].id === edit){
                    editted = todoArray[i];
                    break;
                }
            }

            setInput(editted.title);
        }
        else{
            setInput("");
        }

    } , [edit , setEdit , setInput , todoArray]);

    return(
        <section className="addtask">

            <input id='todoText' type="text" placeholder={edit === null ? "Enter a todo..." : "Edit this choice"} value={input} onChange={(e)=>setInput(e.target.value)}/>

            <button onClick={handleAdd}>{edit === null ? "Add" : "Edit"}</button>

        </section>
    );
}

export default AddTask;