import logo from './logo.svg';
import StripeCheckout from 'react-stripe-checkout';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { router } from './MainRouter';
import Navbar from "./components/Navbar"

function App() {
  return (
    <>

      <RouterProvider router={router} />
      {/* </Navbar> */}
    </>
  );
}

export default App;
