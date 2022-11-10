import React, { useEffect, } from 'react';
import { Navigate, useParams } from 'react-router';
import { ChatList } from '../ChatList/ChatList';
import { AUTHOR } from '../constants';
import { FormMes } from '../Form/FormMes';
import { MessageList } from '../MessageList/MessageList';

export const ChatPage = ({ chats, onAddChat, messages, onAddMessage }) => {

    const { chatId } = useParams()

    useEffect(() => {
        if (chatId && messages[chatId].length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
            const timeout = setTimeout(() => {
                onAddMessage(chatId, {
                    author: AUTHOR.BOT,
                    value: 'I am BOT',
                });
            }, 1000);

            return () => clearTimeout(timeout)
        }
    }, [chatId,messages, onAddMessage])

    if (chatId & !messages[chatId]) {
        return <Navigate to='/chats' replase />
    }
    console.log(chatId);
    return <>
        <ChatList chats={chats} onAddChat={onAddChat} />
        <MessageList messages={chatId ? messages[chatId] : []} />
        <FormMes addMessage={onAddMessage} />
    </>
}