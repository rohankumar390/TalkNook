import React, { useCallback, useState } from 'react'

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const handleSubmitForm =useCallback((e)=>{
    e.preventDefault();
    console.log({
email,room
    })
  },[email,room])

  return (
    <>
      <h1>Lobby</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <label htmlFor="">Email Id</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Room Number</label>
        <input type="text" id='room' value={room} onChange={(e) => setRoom(e.target.value)} />
        <br />
        <button>Join</button>

      </form>
    </>
  )
}

export default Lobby