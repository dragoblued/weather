import React, {useState} from 'react';
import '../styles/Input.scss';

export default function Input(props: any) {
    return (
        <input className="input" type="text" placeholder='Select city' onClick={props.click} value={props.value} onChange={()=>{}}/>
    )
}