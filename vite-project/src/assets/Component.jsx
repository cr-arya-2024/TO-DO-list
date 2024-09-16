import React,{useState} from "react";
function Component (){
 const [fruits,setFood]=useState([])
function add(){
let newEle=document.getElementById("task").value;
document.getElementById("task").value=""
setFood(f=>[...f,newEle])
}
function remove(index){

setFood(fruits.filter((_,i) => i !==index))}
return(
 <>
    <h1>TO DO LIST</h1>
    <input type="text" placeholder="Enetr the Task" id="task"/>
 <button onClick={add}>Add Task</button>
    <ul>
        {fruits.map((fruit,index)=><li key={index} onClick={()=>remove(index)}>{fruit}</li>)}
    </ul>
 </>

)
}
export default Component