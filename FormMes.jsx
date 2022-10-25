import React, { useState } from "react";
import { Button } from "./components";
import './formMes.module.css';
import TextField from '@mui/material/TextField';


export const FormMes = ({ addMessage }) => {
    const [value, setValue] = useState('')

    const handlSubmit = (e) => {
        e.preventDefault();
        addMessage(value);
        setValue('');
    }

    return (
        <form className="form" onSubmit={handlSubmit}>
            <TextField
                type="text" value={value}
                onChange={(e) => setValue(e.target.value)} />
            {/* <Button lable="send" disabled={!value}/> */}
            <Button lable='send' disabled={!value} />
            {/* <button lable="send" disabled={!value}>send</button> */}

        </form>
    );
}