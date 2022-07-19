import { Link } from "react-router-dom";
import heroImg from "../images/home.svg";
const Home = () => {
  return (
    <>
      <main className="home-container">
        <div class="home-main-container" id="home-area">
          <div class="home-content">
            <p class="home-main-content">Drop Your Components Easily</p>
            <p class="home-sub-content">
              It has well-organized components and documentation that aid
              developers in producing high-quality applications in less time.
            </p>

            <Link to="/installation">
              <button class="get-started-btn primary-btn button-design">
                Get Started
              </button>
            </Link>
            <div class="home-img">
              <img src={heroImg} alt="Hero SVG" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
