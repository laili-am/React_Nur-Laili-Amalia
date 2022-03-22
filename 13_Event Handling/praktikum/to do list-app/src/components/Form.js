import {React} from "react";

const Form = ({setTodo, Len}) => {
    var itemtoAdd = ""
    const formHandling = (e) =>{
        e.preventDefault()
        itemtoAdd = e.target.firstChild.value
        if(e.target.firstChild.value !== ""){
            setTodo(state => [...state,{id:Len,todo:itemtoAdd}])
        }
    }
    return(
        <div className="Form_container">
            <form onSubmit={formHandling}>
                <input type="text" placeholder="Add to do"/>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default Form
