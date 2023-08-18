import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider'

const Room = () => {
    const socket = useSocket();
    const [remoteSocketId, setRemoteSocketId] = useState(null);
    const [myStream, setMyStream] = useState(null)
    const handleUserJoined = useCallback(({ email, id }) => {
        console.log(`Email ${email} joined room`);
        setRemoteSocketId(true);
    }, [])
    useEffect(() => {
        socket.on("user:joined", handleUserJoined);

        return () => {
            socket.off("user:joined", handleUserJoined)
        }
    }, [socket, handleUserJoined])

    const handleCallUser = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        setMyStream(stream)
    }, [])
    return (
        <>
            <h1>Room</h1>
            <h4>{remoteSocketId ? "Connected" : "No on in Room"}</h4>
            {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}</>
    )
}

export default Room