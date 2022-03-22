import React from "react";

const List = ({todoList, setTodo}) =>{
    const displayList = () =>{
        return(
            <div>
                {
            todoList.map(item => {
                return(
                    <div className="task_item">
                        <li>{item.todo}
                        {/* <button onClick><i class="bi bi-check-lg"></i></button> */}
                        <button onClick={() => setTodo(todoList.filter(i =>i.id !== item.id))}><i class="bi bi-trash-fill"></i></button></li>
                    </div>
                )
            })
        }
        </div>
        )
    }
    return(
        <div className="list_container">
            <ul>
                {displayList()}
            </ul>
        </div>
    )
}

export default List