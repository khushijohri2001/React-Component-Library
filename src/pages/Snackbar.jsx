const Snackbar = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">Snackbar</h1>
          <p class="subtext">
            Snackbars inform users of a process that an app has performed or
            will perform. They appear temporarily, towards the bottom of the
            screen. This component can be used as Toast as well. Toast is mostly
            used to show feedback message. Snackbar is to used show message that
            need user action
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            {" "}
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522snackbar%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522snackbar-content%2522%253ECan%27t%2520send%2520photo.%2520Retry%2520in%25205%2520sec%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522snackbar-retry%2522%253ERETRY%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522snackbar-cross%2522%253EX%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
              sandbox="allow-scripts allow-same-origin"
              title="snackbar"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-snackbar-area">
            <h2 class="heading-text-utility-medium">Standard Snackbar</h2>
          </div>

          <div class="snackbar">
            <div class="snackbar-content">Can't send photo. Retry in 5 sec</div>
            <div class="snackbar-retry">RETRY</div>
            <div class="snackbar-cross">X</div>
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
                  <a href="#standard-snackbar-area">Standard Snackbar</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};
export default Snackbar;
