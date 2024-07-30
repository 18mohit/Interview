import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (!name || !email || !password) {
        throw new Error('All fields are required');
      }
      const userData = {
        name,
        email,
        password,
      };

      // Save user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      setName('');
      setEmail('');
      setPassword('');

      console.log('User data stored:', userData);
    } catch (err) {
      setError(err.message);
      console.error('Error storing user data:', err);
    }
  };

  return (
    <>
      <h1>Create Account</h1>
      {error && <p style={{ color: 'red'}}>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
          />
        </div>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </>
  );
}

export default SignUp;
