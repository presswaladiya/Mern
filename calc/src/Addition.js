import React,{useState} from "react";

function Addition(){
    const [no1,SetText1]=useState('');
    const [no2,SetText2]=useState('');
    const no1handleChange=(event)=>{
        SetText1(event.target.value);
    }
    const no2handleChange=(event)=>{
        SetText2(event.target.value);
    }
    const handleSubmit=()=>{
        alert("Addition is:"+(parseInt(no1)+parseInt(no2)))
    }
    return(
        <div>
            <input type="text" value={no1} onChange={no1handleChange}></input><br/>
            <input type="text" value={no2} onChange={no2handleChange}></input><br/>
            <button onClick={handleSubmit}>Show Value</button>
        </div>
    )
}

export default Addition;