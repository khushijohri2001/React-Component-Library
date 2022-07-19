import logoImg from "../images/logo.svg";
import githubLogo from "../images/github.svg";

const Header = () => {
  return (
    <>
      <header>
        {/* <a href="index.html"> */}
        <img src={logoImg} class="header-logo" alt="GirlifyCoder Logo" />
        {/* </a> */}
        <h1 class="header-title">GirlifyCoder Component Library</h1>

        <div class="header-icons">
          <a href="https://github.com/khushijohri2001">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
          <small>Source Code</small>
        </div>
      </header>
    </>
  );
};

export default Header;
