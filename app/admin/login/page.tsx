// components/LoginButton.js
import { useState } from 'react';

export default function LoginButton() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = async () => {
        setIsClicked(true);

        // Trigger serverless function to handle server-side logic
        await fetch('/api/sendCred', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // You can pass any necessary data here
            body: JSON.stringify({}),
        });
    };

    return (
        <button onClick={handleClick} className="btn bg-pink-red text-slate-900 hover:text-white">
            {isClicked ? 'Credentials Sent' : 'Send Credentials'}
        </button>
    );
}
