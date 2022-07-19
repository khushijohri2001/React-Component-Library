import logoImg from "../images/logo.svg";

const Badges = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">BADGES</h1>
          <p class="subtext">
            Documentation and examples for badges, our small count and labeling
            component.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%2520%253Cdiv%2520class%253D%2522standard-badges%2522%2520id%253D%2522badges-on-icons-area%2522%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-headings%2522%253EBadges%2520on%2520Icons%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badges-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge1%2522%253E1%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fcart-fill.svg%2522%2520class%253D%2522cart-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge2%2522%253E2%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fbell.svg%2522%2520class%253D%2522bell-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522icon3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge3%2522%253E3%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fuser.svg%2522%2520class%253D%2522user-icon%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Chr%2520color%253D%2522yellow%2522%2520size%253D%25221%2522%2520%252F%253E%250A%250A%2520%2520%253Cdiv%2520class%253D%2522standard-badges%2522%2520id%253D%2522badges-on-avatar-area%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-headings%2522%253EBadges%2520on%2520Avatar%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-avatar%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-online%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522online%2522%253E.%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522small-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-offline%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522offline%2522%253E.%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Flogo.svg%2522%2520class%253D%2522small-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Chr%2520color%253D%2522yellow%2522%2520size%253D%25221%2522%2520%252F%253E%250A%250A%2520%2520%253Cdiv%2520class%253D%2522standard-badges%2522%2520id%253D%2522some-more-badges-area%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-headings%2522%253ESome%2520more%2520Badges%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522save-badge%2522%253ESave%2520Rs.500%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E"
              sandbox="allow-scripts allow-same-origin"
              title="badges"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div class="standard-area" id="badges-on-icons-area">
            <p class="standard-headings">Badges on Icons</p>
            <div class="badges-icon">
              <div class="icon1">
                <div class="badge1">1</div>
                <img src={logoImg} alt="logo" class="cart-icon" />
              </div>

              <div class="icon2">
                <div class="badge2">2</div>
                <img src={logoImg} alt="logo" class="bell-icon" />
              </div>

              <div class="icon3">
                <div class="badge3">3</div>
                <img src={logoImg} alt="logo" class="user-icon" />
              </div>
            </div>
          </div>

          <hr color="yellow" size="1" />

          <div class="standard-text" id="badges-on-avatar-area">
            <p class="standard-headings">Badges on Avatar</p>
            <div class="badge-avatar">
              <div class="avatar-online">
                <div class="online">.</div>
                <img src={logoImg} alt="logo" class="small-img" />
              </div>

              <div class="avatar-offline">
                <div class="offline">.</div>
                <img src={logoImg} alt="logo" class="small-img" />
              </div>
            </div>
          </div>

          <hr color="yellow" size="1" />

          <div class="standard-text" id="some-more-badges-area">
            <p class="standard-headings">Some more Badges</p>
            <div class="save-badge">Save Rs.500</div>
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
                  <a href="#badges-on-icons-area">Badges on Icons</a>
                </li>
                <li>
                  <a href="#badges-on-avatar-area">Badges on Avatar</a>
                </li>
                <li>
                  <a href="#some-more-badges-area">Some more Badges</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Badges;
