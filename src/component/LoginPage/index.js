import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

// LOGIN PAGE
const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // Handle  change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleLogin = () => {
    if (form.email.trim() === '' || form.password.trim() === '') {
      alert('Please enter email and password.');
      return;
    }

    onLogin(form); // Pass login data to parent
    navigate('/profile'); // Navigate to profile page
  };

  return (
   <div className='login-container'>
     <div className='login-box'>
      <h1 className="heading">Signin to your <br /> PopX account</h1>
      <p className='login-paragraph'>Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit.</p>
    

      <div>
        <label>Email Address</label> <br />
        <input
          type='text'
          name='email'
          className='input'
          placeholder='Enter email address'
          onChange={handleChange}
          value={form.email}
        />
      </div>

      <div>
        <label>Password</label> <br />
        <input
          type='password'
          name='password'
          className='input'
          placeholder='Enter password'
          onChange={handleChange}
          value={form.password}
        />
      </div>

      <div>
        <button className='login-button' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
   </div>
  );
};

export default LoginPage;
