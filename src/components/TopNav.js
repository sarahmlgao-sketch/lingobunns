import { NavLink } from 'react-router-dom';
import '../styles/TopNav.css';

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-links">
        <NavLink to="/" className="nav-link" end>
          home
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          profile
        </NavLink>
        <NavLink to="/progress" className="nav-link">
          progress
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          settings
        </NavLink>
      </div>
    </nav>
  );
}

export default TopNav;
