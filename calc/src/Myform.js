import React,{useState} from "react";

function Myform(){
    const [text,SetText]=useState('');


const handleChange=(event)=>{
    SetText(event.target.value);
}

const handleSubmit=()=>{
    alert('Textbox value is:'+text);
}
return(
    <div>
    <input type="text" value={text} onChange={handleChange}></input>
    <button onClick={handleSubmit}>Show Value</button>
    </div>
)}

export default Myform;