import React, { useState,useEffect } from 'react';
import './chatBox.css';
export default function ChatBox(props) {

    var chatName = props.data;
    const [inputValue, setInputValue] = useState('');
    const [submitText, setSubmitText] = useState([]);
    const [inputFieldValue, setInputFieldValue] = useState('');
    const [userData, setUserData] = useState({});
    const [formValue, setformValue] = useState([]);
    const enteredText = (event) => {
        setInputValue(event.target.value);
        setInputFieldValue(event.target.value);
        console.log(inputValue, "8==");
    };
    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValue));
    }, [formValue]);
    const handleClick = () => {
        console.log(inputValue, "11==");
        setSubmitText((d) => [...d, inputValue]);

        console.log(submitText.typeOf, "13==");
      
        console.log(userData[props.data] = submitText, '222')
        console.log(userData, "18===")
        setInputFieldValue('');
        setformValue((prevFormValues) => [...prevFormValues, inputFieldValue]);
       
        setInputFieldValue('');

    }
    return (
        <div>
            <div className='headText'>
                <div className='title'>
                    <h2 className='onName'>{props.data}</h2>
                </div>
                <div className='displayText'>
                    {submitText.map((items, idx) => {
                        return (
                            <p key={idx}>{items}---</p>
                        )
                    })}
                </div>
                <div className='inputText'>
                    <input value={inputFieldValue} type="text" placeholder="Enter text here" onChange={enteredText} />
                    <button onClick={handleClick}>Send</button>
                </div>
            </div>
        </div>
    )
}