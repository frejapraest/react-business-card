import profileImage from "../profile-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <header className="header">
      <img className="profile-img" src={profileImage} alt="Profile image." />
      <div className="header-info">
        <h1>Freja Hou Præst</h1>
        <h3>Scrimba Student</h3>
        <div className="header-btn-container">
          <a className="header-btn email" href="mailto:frejapraest@gmail.com">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            Email
          </a>
          <a className="header-btn linkedin" href="https://www.linkedin.com/in/frejapraest/">
            <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
