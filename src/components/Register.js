import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    console.log('change',name,value)

    setData({ ...data, [name]: value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const headers = {
    "Content-Type":"application/json"

    }

    const res = await axios.post("http://localhost:8080/signup", data,headers)

    console.log('res',res)

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
        <h2 className="text-center mb-4">Sign up for new account</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className="form-label">Password</label>
              {/* <a href="#" className="text-decoration-none">Forgot password?</a> */}
            </div>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={handleChange}
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>
          {/* <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <label htmlFor="password" className="form-label">Confirm Password</label>
            </div>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="confirmPassword"
              required
            />
          </div> */}
          <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Already have an account ?{' '}
          <Link to="/login" className="text-decoration-none">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
