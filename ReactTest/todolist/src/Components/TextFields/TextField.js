import React,{useState} from "react";
import './TextField.css'
import Display from "../Display/Display";
import Button from "../Buttons/Button";



export default function TextField() {

    const [title,setTitle] = useState('')
    const [finalTitle,setFinalTitle] = useState('')

    const onStateChange = (event) => {
        setTitle(event.target.value)
    }

    const onClick = () =>{
        setFinalTitle(title)
    }

    return (
        <div>
        <form>
            <label>TODO : </label>
            <input type="text" name="name" value={title} onChange={onStateChange}/>
            <Button onClick={onClick}/>
        </form>
        <h4>Your TODO will show here</h4>
        <Display title={finalTitle}/>
        </div>
    );
}
