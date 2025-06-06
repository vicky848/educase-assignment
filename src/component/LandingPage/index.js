import './index.css';
import { useNavigate } from 'react-router-dom';


// LANDING PAGE

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className='register-box'>
      <h1 className='heading'>Welcome to PopX</h1>
      <p className='paragraph'>Lorem ipsum dolor sit amet <br/>consectetur adipiscing elit.</p>
      <p className='paragraph'></p>
      <button className='button account' onClick={() => navigate('/signup')}>Create Account</button> <br/> <br/>
      <button className='button registred' onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
};

export default LandingPage;
