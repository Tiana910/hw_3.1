import React from 'react'

export const MessageList = ({ messages }) => {
    return (<ul>
        {messages.map((message, idx) => (
            <li key={idx} data-testid="li">
                {message.author}: {message.value}
            </li>
        ))}
    </ul>
    )
}
