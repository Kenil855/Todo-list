
import { MdOutlineDownloadDone } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
export const TodoFrom=()=>{

    const handelInputChange=(value)=>{
        setInputValue(value)
        };
    
   
        const handelformsubmit=(event)=>{
            event.preventDefault();
    
    //every thing is written in on submit btn after click btn event fire
            
    if(!inputValue) return;
    
    if (task.includes(inputValue)) return{
    };//if user can not written  same value so do no join in array
    
    setTask((prevTask)=>[...prevTask,inputValue]);//previous elment array create to sotre the input
        
    setInputValue("")//add btn next clear our input filde
        };

        
return(
    <>
    <section className="todo-container">

<header>
    <h1>Todo-List</h1>
</header>

<form onSubmit={handelformsubmit}>
<div>
<input type="text" 
className="todo-input"
 autoComplete="off"
 value={inputValue}
 onChange={(event)=>handelInputChange(event.target.value)}
 />
</div>
<div> 
 <button type="submit" className="todo-btn" >Add Task</button>
</div>

</form>

<section className="myUnOrdList">
    <ul>
        {
            task.map((curTask,index)=>{
                return<li key={index} className="todo-item">
                    <span>{curTask}</span>
                    <button className="check-btn"><MdOutlineDownloadDone /></button>
                    <button className="delete-btn" onClick={heandelDeleteTodo(curTask)}><TiDelete /></button>
                
                </li>
            })

            
        }
    </ul>
</section>
<section>
                    <button className="clear-btn" onClick={handelclearinput}>clear all</button>
                </section>

</section>

    </>
)
}

export default TodoFrom;