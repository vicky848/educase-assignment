
import './index.css';

// PROFILE PAGE

const ProfilePage = ({ user }) => {
  if (!user) {
    return <p>User data not found.</p>;
  }

  return (
   <div className='profile-container'>
     <div className="profile-box">
      <h1 className="-profile-heading">Welcome, {user.name || 'User'}!</h1>
      <div className="profile-info">
        <p><strong>Full Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Agency:</strong> {user.agency === 'yes' ? 'Yes' : 'No'}</p>
      </div>
    </div>
   </div>
  );
};

export default ProfilePage;

