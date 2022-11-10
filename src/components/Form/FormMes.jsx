import React, { useState, memo } from "react";
import { Button } from "./components";
import './formMes.module.css';
import TextField from '@mui/material/TextField';
import { AUTHOR } from "../constants";
import { useParams } from "react-router";



export const FormMes = memo(({ addMessage }) => {
    const [value, setValue] = useState('');
    const { chatId } = useParams()


    const handlSubmit = (ev) => {
        ev.preventDefault();
        if (chatId) {
            addMessage(chatId, {
                author: AUTHOR.USER,
                value,
            });
        }
        setValue('');
    };

    return (
        <form className="form" onSubmit={handlSubmit}>
            <TextField
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}
                inputProps={{ 'data-testid': 'input' }} />
            <Button
                lable='send'
                disabled={!value}
                data-testid="button"
                type="submit"
                render={(lable) => <div>{lable}</div>}>
                    send
            </Button>
        </form>
    );
});