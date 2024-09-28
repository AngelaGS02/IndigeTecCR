'use client'
// Import material UI components
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// Create a new NextJS page for the login page

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email, password);
        setEmail(email);
        setPassword(password);
        //TODO: Add a check to see if the email and password are correct, fetching from the database
        router.push('/recipes');

    }

    // Create a new NextJS form for user and password using Material UI
    return (
        <form 
        
        className='flex flex-col gap-4 bg-background p-4 rounded-md shadow-md w-1/3 mx-auto mt-20'
        onSubmit={handleSubmit}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
            sx={{
                backgroundColor: '#007bff',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#0056b3',
                },
                width: '75%',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            type="submit">Login</Button>
        </form>
    );
}
