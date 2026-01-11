import profileImage from '../assets/profile.png';

function Profile() {
  return (
    <div className="page">
      <img src={profileImage} alt="Profile" className="page-image" />
    </div>
  );
}

export default Profile;
