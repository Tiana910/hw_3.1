import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { ChatList } from './components/ChatList/ChatList';
import { AUTHOR } from './components/constants';
import { ChatPage } from './components/pages/ChatPage';
import { Main } from './components/pages/Main';
import { Profile } from './components/pages/Profile';

const defaultChats = [
  {
    id: '1',
    name: 'first'
  },
  {
    id: '2',
    name: 'second'
  }
];

const defaultMessages = {
  '1': [{ author: AUTHOR.USER, value: 'hellow, world' }],
  '2': [{ author: AUTHOR.BOT, value: 'hellow ,  I AM BOT' }]
}

export const App = () => {
  const [chats, setChats] = useState(defaultChats);
  const [messages, setMessages] = useState(defaultMessages);

  const onAddChat = (newChat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: []
    })
  }

  const onAddMessage = (chatId, newMessage) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  }

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='profile' element={<Profile />} />
      <Route path='chats'>
        <Route
          index
          element={<ChatList chats={chats} 
          onAddChat={onAddChat} />} />
        <Route path=':chatId' element={<ChatPage
          chats={chats} onAddChat={onAddChat} messages={messages} addMessage={onAddMessage} />} />
      </Route>
      <Route path='*' element={<div>404 page</div>} />

    </Routes>
  );
};