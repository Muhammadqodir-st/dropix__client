import { useState } from "react"

export default function Profile() {

    const [arr, setArr] = useState([])

    const [text, setText] = useState("")

    function handleChange() {
        arr.push(text);
        setText("")
    }

    return (
        <div className="w-full px-4">
            <div className="flex gap-3">
                <input onChange={(e) => setText(e.target.value)} value={text} className="border" type="text" />
                <button onClick={handleChange} className="border">add</button>
            </div>
            <ul>
                {arr.map(i => (
                    <li>{i}</li>
                ))}
            </ul>
        </div>
    )
}