const Text = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">TEXT UTILITIES</h1>
          <p class="subtext">
            Text utilities are used for text alignment, styles and overflow
            things.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253C%21--%2520HTML%2520--%253E%250A%253Cdiv%2520class%253D%2522text%2522%253E%250A%2520%2520%253Ch1%253EHeading%253C%252Fh1%253E%250A%2520%2520%253Ch3%253EGray%2520Text%253C%252Fh3%253E%250A%2520%2520%253Csmall%253ESmall%2520Text%253C%252Fsmall%253E%250A%2520%2520%253Ch2%253ECenter%2520Text%253C%252Fh2%253E%250A%253C%252Fdiv%253E%250A"
              sandbox="allow-scripts allow-same-origin"
              title="text"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-text-area">
            <h2 class="heading-text-utility-medium">Standard text</h2>
          </div>
          <div class="text">
            <h1 class="header-title">GirlifyCoder Component Library</h1>
            <h1 class="heading-text-utility-bigger">Heading Bigger</h1>
            <h2 class="heading-text-utility-medium">Heading Medium</h2>
            <h3 class="gray-text">Gray Text</h3>
            <small>Small Text</small>
            <h2 class="heading-text-utility-center">Center Text</h2>
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
                  <a href="#standard-text-area">Standard Text</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Text;
