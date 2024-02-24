import React from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/register",
    element: (<RegisterPage />),
  },
  
]);
