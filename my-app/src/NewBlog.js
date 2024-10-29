import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './NewBlog.css';

function NewBlog() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 
    function submitHandler(event) {
        event.preventDefault();
        const data = JSON.stringify({ "title": title, "author": name, "body": message });
        
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            navigate('/'); // Navigate to home page after submission
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewBlog;

