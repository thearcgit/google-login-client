import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg"
import axios from 'axios';

const Navbar = ({user}) => {
  const handleLogout = async()=>{
    try {
      window.open(`http://localhost:8080/logout`,'_self')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary " data-bs-theme="dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar scroll</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/register" aria-disabled="true">Register</Link>
            </li> */}
          </ul>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            {user && user.user && Object.keys(user.user).length>0 ?
            <>
            <li className="nav-item">
              <Link className="nav-link">{user?.user?.name}</Link>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link " to="/register" aria-disabled="true">Register</Link> */}
              {/* <img src={user?.user?.image} alt="" /> */}
              <img src={user?.user?.image} alt="" style={{width:'40px',borderRadius:"50%"}} />
            </li>
            <li onClick={handleLogout} style={{color:"white",cursor:"pointer"}}>Logout</li>
            </>
            :
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/register" aria-disabled="true">Register</Link>
            </li>
            </>

            }
          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => {e.preventDefault()}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
