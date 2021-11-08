import React, { useState } from "react"

const Greeting = ({ name, age }) => {
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Info: {info}</h1>
      <input 
        type="text" 
        onChange={event => setInfo(event.target.value)}
      /><br/>
      <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
      { loading ? 
          <div>loading true</div>
          : 
          <div>loading false</div> 
      }
    </>
  )
}

export default Greeting