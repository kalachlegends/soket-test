import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Socket } from 'phoenix';

const PhoenixSocketContext = createContext({ socket: null });

const PhoenixSocketProvider = ({ children }) => {
    const [socket, setSocket] = useState();


    useEffect(() => {
        const socket = new Socket('ws://localhost:10606/socket/websocket');
        socket.connect();
       
    });

    if (!socket) return null;

    return (
        <PhoenixSocketContext.Provider value={{ socket }}>{children}</PhoenixSocketContext.Provider>
    );
};

PhoenixSocketProvider.propTypes = {
    children: PropTypes.node,
};

export { PhoenixSocketContext, PhoenixSocketProvider };