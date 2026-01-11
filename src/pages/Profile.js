import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { saveToStorage, loadFromStorage } from '../utils/storage';
import profileIcon from '../assets/images/profile/profile icon.png';
import profilePic from '../assets/images/profile/profile - pic.png';
import bunBunReading from '../assets/images/profile/profile - BunBun reading.png';
import smartBunbun from '../assets/images/profile/profile - smart bunbun.png';
import doodleProfile from '../assets/images/profile/doodle-profile.png';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    age: '',
    spokenLanguages: [],
    learningLanguages: [],
  });

  const [showSaved, setShowSaved] = useState(false);

  const languages = ['English', 'Chinese (Mandarin)', 'French', 'Spanish', 'Hindi'];

  useEffect(() => {
    const saved = loadFromStorage('profile', null);
    if (saved) {
      setFormData(saved);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLanguageChange = (type, language) => {
    setFormData(prev => {
      const current = prev[type];
      const updated = current.includes(language)
        ? current.filter(l => l !== language)
        : [...current, language];
      return {
        ...prev,
        [type]: updated
      };
    });
  };

  const handleSave = () => {
    saveToStorage('profile', formData);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <div className="page profile-page">
      <div className="profileHeader">
        <div className="profileTitleRow">
          <h1 className="profile-title">Profile</h1>
        </div>
        <img src={profilePic} alt="Profile picture" className="avatarCircle" />
      </div>

      <div className="profileDoodleWrapper">
        <img src={doodleProfile} alt="Decorative doodle" className="profileDoodleImg" />
      </div>

      <div className="profileContent">
        <div className="profileUserFields">
          <div className="inputGroup">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="textInput"
              placeholder="Enter your username"
            />
          </div>

          <div className="inputGroup">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="textInput"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="profileChildSection">
          <div className="decoLeft">
            <img src={smartBunbun} alt="Smart bunbun" className="decoBunnyLeft" />
          </div>
          
          <div className="childCard">
            <Card title="Your Child's Profile">
              <div className="form-group">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter last name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Age</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="twoCol">
                <div className="form-group">
                  <label className="form-label">Spoken language</label>
                  <div className="checkGroup checkbox-column">
                    {languages.map(lang => (
                      <div key={lang} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`spoken-${lang}`}
                          checked={formData.spokenLanguages.includes(lang)}
                          onChange={() => handleLanguageChange('spokenLanguages', lang)}
                        />
                        <label htmlFor={`spoken-${lang}`}>{lang}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Learning language</label>
                  <div className="checkGroup checkbox-column">
                    {languages.map(lang => (
                      <div key={lang} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`learning-${lang}`}
                          checked={formData.learningLanguages.includes(lang)}
                          onChange={() => handleLanguageChange('learningLanguages', lang)}
                        />
                        <label htmlFor={`learning-${lang}`}>{lang}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="saveBtn btn" onClick={handleSave}>
                Save
              </button>
              {showSaved && <span className="save-message">Saved!</span>}
            </Card>
          </div>

          <div className="decoRight">
            <img src={bunBunReading} alt="BunBun reading" className="decoBunnyRight" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
