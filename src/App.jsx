import { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [message, setMessage] = useState('...');

    function updateMessage() {
        fetch(import.meta.env.VITE_BACKEND_URL + '/message')
        .then(response => response.json())
        .then(data => {
            console.log('data:', data);
            setMessage(data.message);
        })
        .catch(error => console.error(error));
    }

    useEffect(() => {
        console.log('VITE_APP_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);
        // Fetch the message from the server when the component first mounts, 
        // then again every 5 seconds
        updateMessage();
        setInterval(() => {
            updateMessage();
        }, 5000);
    }, []);

    return (
        <div className="App">
            <header>
                <h1>A digital noticeboard ...</h1>
            </header>
            <main>
                <span className="label">Message:</span>
                <div className="message-text"><span>{message}</span></div>
            </main>
            <footer>
                <a href="https://github.com/hortfrancis" target="_blank">Alex Hort-Francis 2024</a>
            </footer>

        </div>
    )
}

export default App
