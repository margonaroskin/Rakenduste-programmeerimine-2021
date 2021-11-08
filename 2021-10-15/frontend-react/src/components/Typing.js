import React, {useState} from "react";

function Typing({ sentence }) {
    const [writing, setWriting] = useState("no info")

    return (
        <>
            <h2>Sisesta järgnev teks: "{sentence}"</h2>
            <input
                type="text"
                onChange={event => setWriting(event.target.value)}
            /><br/>
            { sentence === writing ?
                <div><b>Tubli! Said selle raske ülesandega hakkama.</b></div>
                :
                <div>Sisesta üleval olev lause</div>
            }
        </>
    )
}

export default Typing