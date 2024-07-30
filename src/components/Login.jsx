import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);

    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (!user) {
        throw new Error('No user found. Please sign up first.');
      }
      if (user.email !== email || user.password !== password) {
        throw new Error('Invalid email or password.');
      }

      console.log('Login successful');
      setEmail('');
      setPassword('');
      
      // Redirect to the profile route
      navigate('/profile');
    } catch (err) {
      setError(err.message);
      console.error('Error logging in:', err);
    }
  };

  return (
    <>
      <h1>Login Account</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
