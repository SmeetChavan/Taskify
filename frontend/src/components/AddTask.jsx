import {v4} from 'uuid';

function AddTask({todoArray , setToDoArray , input , setInput , edit , setEdit}) {

    const handleAdd = () => {

        if(input === ""){
            console.log("Trying to Ad Empty Field");
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

    return(
        <section className="addtask">

            <input type="text" placeholder={edit === null ? "Enter a todo..." : "Edit this choice"} value={input} onChange={(e)=>setInput(e.target.value)}/>

            <button onClick={handleAdd}>{edit === null ? "Add" : "Edit"}</button>

        </section>
    );
}

export default AddTask;