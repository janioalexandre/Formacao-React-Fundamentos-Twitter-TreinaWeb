import { useState } from 'react';
import style from './TextInput.module.css';

export default function TextInput({placeholder = 'O que está acontecendo?', maxLength, ...props}) {
    const [text, setText] = useState(0);

    function onTextChange(event){
        const text = event.target.value;
        if (text.length <= maxLength){
            setText(text);
        }
    }

    return (
        <div>
            <textarea 
            className={style.input} 
            placeholder={placeholder} 
            maxLength={maxLength} value={text}
            onChange={onTextChange}
            {...props} />

            <p>{text.length} / {maxLength}</p>
        </div>
    );
}
