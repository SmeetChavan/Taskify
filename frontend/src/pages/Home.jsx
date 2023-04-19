import Header from "../components/Header";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

import { useState } from "react";

function Home({ todoArray, setToDoArray, input, setInput }) {

    const [edit, setEdit] = useState(null);

    return (

        <>
            <Header />

            <section className="home">

                <AddTask 
                    todoArray={todoArray} 
                    setToDoArray={setToDoArray} 
                    input={input} 
                    setInput={setInput} 
                    edit={edit} 
                    setEdit={setEdit} 
                />

                {todoArray.length === 0 ?

                    <><h1>Empty Todo</h1><h3>(Please add todos)</h3></>

                    :

                    todoArray.map((todo) => {
                        return <Task 
                            key={todo.id} 
                            todo={todo} 
                            todoArray={todoArray} 
                            setToDoArray={setToDoArray} 
                            edit={edit} 
                            setEdit={setEdit} 
                        />
                    })
                }

            </section>

        </>
    )
}

export default Home;