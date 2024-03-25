'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ChangeEventHandler } from 'react';
import { Login } from '@/utils/ApiSDK';

export default function Accounts() {
  const [username, setUsername] = useState(process.env.NEXT_PUBLIC_TEST_USERNAME ?? '');
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_TEST_PASSWORD ?? '');

  const handleUsernameChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    await Login(username, password);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="username"
          label="Username/Email"
          variant="filled"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          required
          id="password"
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
}