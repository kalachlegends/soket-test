
import React, { useState, useEffect, useMemo } from 'react';
import { Socket } from 'phoenix'
import useChannel from '../hooks/usePhoenixChannel'
export default function Sockets() {
    const [input, setInput] = useState("")
    const [channel] = useChannel("rooms");
    const [message, setMessage] = useState([])
    useEffect(() => {

    })

    function keyEnter(e) {
        if (e.keyCode == 13) {
            channel.push("new:msg", { body: input })
            setMessage([...message, input])
            setInput("")
        }
    }
    return (
        <div>
            <input value={input} onKeyDown={keyEnter} onChange={(e) => setInput(e.target.value)} />
            <div>  {message.map((m) => <div key={m}>{m}</div>)}</div>
        </div>

    )
}
