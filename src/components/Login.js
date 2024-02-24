import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const loginWithGoole = (e) => {
    e.preventDefault()
    window.open("http://localhost:8080/auth/google/callback", "_self")
  }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4">
        <img
          className="mx-auto mb-4"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
          style={{ width: 'auto', height: '2.5rem' }}
        />
        <h2 className="text-center mb-4">Sign in to your account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className="form-label">Password</label>
              <a href="#" className="text-decoration-none">Forgot password?</a>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100 mb-3">Sign in</button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Not a member ?{' '}
          <Link to="/register" className="text-decoration-none">Signup</Link>
        </p>
        <button onClick={loginWithGoole} className="btn btn-outline-secondary" type="button">
          Google Login
        </button>
      </div>
    </div>


  );
};

export default Login;
