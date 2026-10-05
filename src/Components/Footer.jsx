import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.facebook.com/frejapraest?locale=da_DK">
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
      </a>
      <a href="https://www.instagram.com/frejahpraest/">
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
      </a>
      <a href="https://github.com/frejapraest">
        <FontAwesomeIcon icon="fa-brands fa-square-github" />
      </a>
    </footer>
  );
}
