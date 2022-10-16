import React from 'react';
import SocketChat from '../components/SocketChat';
import { Typography } from "@mui/material"
const ChatPage = () => {
    return (
        <div>
            <Typography variant="h3" sx={{ marginBottom: "30px" }}  >Chat</Typography>
            <SocketChat />
        </div>
    );
}

export default ChatPage;
