import React, {useState} from 'react';
import '../styles/Input.scss';

export default function Input(props: any) {
    const [value, setValue] = useState(props.value);
    const input = props.error === false ? 'input' : 'input input_error';
    const label = props.error === false ? 'label' : 'label label_display';
    return (
        <>
            <input className={input} type="text" placeholder='Select city' onClick={props.click} value={props.value} onChange={(e)=>{props.change(e.target.value);}} />
            <label className={label}>Cities were not found</label>
        </>
    )
}