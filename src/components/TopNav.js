import { NavLink } from "react-router-dom";
import homeIcon from "../assets/nav/home.svg";
import profileIcon from "../assets/nav/profile.svg";
import progressIcon from "../assets/nav/progress.svg";
import settingsIcon from "../assets/nav/settings.svg";

export default function TopNav() {
  const cls = ({ isActive }) =>
    "navItem" + (isActive ? " active" : "");

  return (
    <header className="topnav">
      <div className="topnavInner">
        {/* LEFT: logo */}
        <div className="navLeft">
          <img src="/logo.svg" alt="lingo bunns" className="navLogo" />
        </div>

        {/* CENTER: icon nav */}
        <nav className="navCenter">
          <NavLink to="/" className={cls} end>
            <img src={homeIcon} alt="home" />
          </NavLink>

          <NavLink to="/profile" className={cls}>
            <img src={profileIcon} alt="profile" />
          </NavLink>

          <NavLink to="/progress" className={cls}>
            <img src={progressIcon} alt="progress" />
          </NavLink>

          <NavLink to="/settings" className={cls}>
            <img src={settingsIcon} alt="settings" />
          </NavLink>
        </nav>

        {/* RIGHT: spacer to keep center actually centered */}
        <div className="navRight" />
      </div>

      <div className="divider" />
    </header>
  );
}
