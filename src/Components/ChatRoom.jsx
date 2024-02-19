import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useChat from "../UseChat";

import "../css/Chat.css";

const ChatRoom = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Grupo: {roomId}</h1>
      <div className="messages-container">
        <ul className="messages-list">
          {messages.slice(0).reverse().map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <div className="bottom-controls">
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Escribe tu mensaje aquí"
          className="new-message-input-field"
        ></textarea>
        <button onClick={handleSendMessage} className="send-message-button">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
