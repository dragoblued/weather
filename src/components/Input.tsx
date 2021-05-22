import React, {useState, useEffect} from 'react';
import '../styles/Input.scss';

export default function Input(props: any) {
    const [value, setValue] = useState(props.value);
    const input = props.error === false ? 'input' : 'input input_error';
    const label = props.error === false ? 'label' : 'label label_display';
    const type = props.type == 'select' ? < div className={props?.showList == false ? 'input-icon input-icon__select' : 'input-icon input-icon__select input-icon__select_rotate'}></div> : <div className="input-icon input-icon__calendar"></div>;
    
    return (
        <div className="wrapper-input">
            {type}
            <input className={input} type="text" placeholder={props.placeholder} onClick={props.click} value={props.value} onChange={(e)=>{ props.change(e.target.value);}}/>
            <label className={label}>{props.textError}</label>
        </div>
    )
}