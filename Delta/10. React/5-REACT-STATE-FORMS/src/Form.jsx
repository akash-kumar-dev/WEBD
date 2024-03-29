import { useState } from "react"

export default function Form() {
    let [fullName, setFullName] = useState("Text");

    let handleNameChange = (event) => {
        setFullName(event.target.value);
    }

    return (
        <form>
            <label htmlFor="username">Full Name</label>
            <input
                placeholder="Enter Full Name"
                type="text"
                value={fullName}
                onChange={handleNameChange}
                id="username"
            />
            <button>Submit</button>
        </form>
    )
}