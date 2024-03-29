import { useState } from "react"

export default function MultipleInputForm() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    })

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        // setFormData((currData) => {
        //     currData[fieldName] = newValue;
        //     return { ...currData };
        // })

        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                placeholder="Enter Full Name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter username"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleInputChange}
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input
                placeholder=""
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    )
}