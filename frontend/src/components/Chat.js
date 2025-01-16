import React, { useState } from "react";
import axios from "../services/api";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        const response = await axios.post("/conversation", { message: input });
        setMessages([...messages, { user: input, bot: response.data.reply }]);
        setInput("");
    };

    return (
        <div className="p-4">
            <div className="mb-4 h-96 overflow-y-scroll bg-gray-100 p-4">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {msg.user}</p>
                        <p><strong>Bot:</strong> {msg.bot}</p>
                    </div>
                ))}
            </div>
            <input
                className="border p-2 mr-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2" onClick={sendMessage}>
                Send
            </button>
        </div>
    );
};

export default Chat;