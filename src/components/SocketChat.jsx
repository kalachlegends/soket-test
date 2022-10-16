
import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Socket } from 'phoenix'
import useChannel from '../hooks/usePhoenixChannel'

import { SocketContext } from '../context/SocketContext'
export default function Sockets() {

    const socket = useContext(SocketContext);
    const [input, setInput] = useState("")
    const [user, setUser] = useState("1")
    const arrayCallbackAndEvent = [{
        event: "new:msg",
        callback: (payload) => {
            console.log(payload)
            setMessage(arr => [...arr, { user: payload.user, message: payload.body }])

            console.log(message)
        }
    }, {
        event: "user:entered",
        callback: (payload) => {
            console.log(payload)

        }
    }]
    const [channel] = useChannel(socket, "rooms:lobby", arrayCallbackAndEvent);

    const [message, setMessage] = useState([])

    function keyEnter(e) {
        if (e.keyCode == 13) {
            channel.push("new:msg", { body: input, user: user })

            setInput("")
        }
    }

    return (
        <div>
            <input value={input} onKeyDown={keyEnter} onChange={(e) => setInput(e.target.value)} />
            <input value={user} onChange={(e) => setUser(e.target.value)} />

            <div>  {message.map(({ user, message }) => <div>{user} - {message}  </div>)}</div>
        </div>

    )
}
