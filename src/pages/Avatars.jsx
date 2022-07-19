import logoImg from "../images/logo.svg";

const Avatars = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">AVATARS</h1>
          <p class="subtext">
            Avatar can be used to show user's profile picture on profile
            information page, on navigation bar, in blogs grid items.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522avatars%2522%253E%250A%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522larger-img%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522large-img%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522medium-img%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522small-img%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522smaller-img%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
              sandbox="allow-scripts allow-same-origin"
              title="avatars"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-area">
            <h2 class="heading-text-utility-medium">Standard Avatars</h2>
          </div>
          <div class="avatars">
            <img src={logoImg} class="larger-img" alt="logo-img" />
            <img src={logoImg} class="large-img" alt="logo-img" />
            <img src={logoImg} class="medium-img" alt="logo-img" />
            <img src={logoImg} class="small-img" alt="logo-img" />
            <img src={logoImg} class="smaller-img" alt="logo-img" />
          </div>
        </div>
      </main>

      <right-aside>
        <div class="right-aside-container">
          <ul class="nav-list-main">
            <li>
              <h3 class="on-this-page">On this page</h3>
              <ul class="nav-list-sub right-list">
                <li>
                  <a href="#standard-area">Standard Avatar</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Avatars;
