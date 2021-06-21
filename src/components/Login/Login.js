import React from 'react';
import Footer from '../Common/Footer/Footer'
import Navbar from '../Common/Navbar/Navbar'
import LoginForm from './LoginForm';
const Login = () => {
  return (
    <div>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>
  );
};

export default Login;