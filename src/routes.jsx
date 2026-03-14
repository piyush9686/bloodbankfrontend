import React from "react";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";  
import RequestBlood from "./pages/RequestBlood.jsx";
import DonateBlood from "./pages/DonateBlood.jsx";
import DonorList from "./pages/DonorList.jsx";
import RequestList from "./pages/Requestlist.jsx";
function AppRoutes() {
  return (
    <BrowserRouter> 
    <Routes> 
         
      <Route path="/home"  element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />

      
      <Route path="/login"  element={<Login />} />
      <Route path="/"  element={<Register />} />

      <Route path="/dashboard" 
       element={
         <ProtectedRoute>
           <Dashboard />
         </ProtectedRoute>
       } />

      <Route path="/donor-list" 
       element={
         <ProtectedRoute>
           <DonorList />
         </ProtectedRoute>
       } />
      <Route path="/donate-blood"
        element={
          <ProtectedRoute>
            <DonateBlood />
          </ProtectedRoute>
        } />
      <Route path="/request-blood" 
       element={
         <ProtectedRoute>
           <RequestBlood />
         </ProtectedRoute>
       } />
      <Route path="/request-list" 
       element={
         <ProtectedRoute>
           <RequestList />
         </ProtectedRoute>
       } />
    </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;