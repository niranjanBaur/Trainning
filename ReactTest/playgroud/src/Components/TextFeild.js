import React,{useState} from "react";

export default function TextFeild() {

    const [text,setText] = useState("Enter text here")

    const onStateChange = (event) =>{
        setText(event.target.value)
    }

    const onClickUpHandler = () => {
        let updatedText = text.toUpperCase()
        setText(updatedText)
    }

    const onClickLoHandler = () => {
        let updatedText = text.toLowerCase()
        setText(updatedText)
    }

    const onCLickCapHandler = () => {
        const arr = text.toLowerCase().split(' ').trim
        console.log(555,arr);
        let updatedText = ""
        // arr.forEach(ele =>{
        //     console.log(ele ,ele[0]);
        // });
        
        arr.forEach(ele =>{
            if(ele[0] === ' '){
                arr.pop()
            }
            else{
                updatedText += ele[0].toUpperCase() + ele.slice(1) 
            }
        });

        setText(updatedText)
    }

    return (
        <div className="mb-3">
        <h6 className="mt-5">Enter your text here</h6>
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange = {onStateChange}
        ></textarea>
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            value={text}
            onChange = {onStateChange}
        ></textarea>
        <button className="btn btn-primary mt-4" onClick={onClickUpHandler}>TO UPPERCASE</button>
        <button className="btn btn-warning ms-2 mt-4" onClick={onClickLoHandler}>to lowerCase</button>
        <button className="btn btn-primary ms-2 mt-4" onClick={onCLickCapHandler}>To Capitalize Each Word</button>
        </div>
    );
    }
