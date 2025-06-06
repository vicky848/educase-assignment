import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

// SIGNUP PAGE
const SignupPage = ({ onSignup }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSignup(form);
    navigate('/profile');
  };

  return (
    <div className='signup-container'>
      <div className='signup-box'>
      <h1 className='heading'>Create your PopX account</h1>
      <label>Full Name</label> <br/>
      <input name="name" type="text" className="input" onChange={handleChange} /><br/>
      <label>Phone Number</label><br/>
      <input name="phone" type="text" className="input" onChange={handleChange} /><br/>
      <label>Email Address</label><br/>
      <input name="email" type="text" className="input" onChange={handleChange} /><br/>
      <label>Password</label><br/>
      <input name="password" type="password" className="input" onChange={handleChange} /><br/>
      <label>Company Name</label><br/>
      <input name="company" type="text" className="input" onChange={handleChange} /><br/>
      <label>Are you an Agency?</label><br/>
      <div className="radio-group">
        <label>
          <input type="radio" name="agency" value="yes" onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="radio" name="agency" value="no" onChange={handleChange} /> No
        </label>
      </div>
      <button className='button-create' onClick={handleSubmit}>Create Account</button>
    </div>
    </div>
  );
};

export default SignupPage;
