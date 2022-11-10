import { ListItem , List} from "@mui/material";
import React, { useState } from "react";
import {nanoid} from 'nanoid';
import { Link } from "react-router-dom";

export const ChatList = ({chats, onAddChat})=>{
    const [value, setValue]= useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(value) {
            onAddChat({
                id: nanoid(),
                name: value,
            });
            setValue('')
        }
    }

   
return <>

    <ul>
        {chats.map((chat)=>(
        <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
        </ListItem>))}
    </ul>
    <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button>create chat</button>
    </form>
</>
}