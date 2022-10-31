import React,{useState} from "react";
import Button from "../Buttons/Button";
import Display from "../Display/Display";



export default function TextField() {

    const [title,setTitle] = useState('')

    const onStateChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div>
        <form>
            <label>TODO : </label>
            <input type="text" name="name" value={title} onChange={onStateChange}/>
        </form>
        <Display title={title}/>
        </div>
    );
}
