import { Header } from "./Header.jsx";
import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";

export function Card() {
  return (
    <div className="card-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
