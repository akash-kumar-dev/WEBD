import { useState } from "react"

export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });     // for reset data of form
    }

    return (
        <div onSubmit={handleSubmit}>
            <h4>Give a comment!</h4>
            <form>
                <label htmlFor="username">Username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /><br />

                <label htmlFor="remark">Remarks</label>
                <textarea placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange} id="remark" name="remarks"></textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating" />
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}