import React, { useState } from "react";
import axios from "axios";

function App() {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChat = async () => {
    const res = await axios.post("http://localhost:8000/chat", {
      message: chat
    });

    setMessages([...messages, { user: chat, ai: res.data.reply }]);
    setChat("");
  };

  return (
    <div style={{ fontFamily: "Inter", padding: "20px" }}>
      <h2>AI CRM - Log Interaction</h2>

      {messages.map((m, i) => (
        <p key={i}>
          <b>You:</b> {m.user} <br />
          <b>AI:</b> {m.ai}
        </p>
      ))}

      <input
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="Enter interaction..."
      />
      <button onClick={handleChat}>Send</button>
    </div>
  );
}

export default App;
