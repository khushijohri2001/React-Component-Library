const ResponsiveImage = () => {
  return (
    <>
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">IMAGES</h1>
          <p class="subtext">
            Images can be responsive to fit the parent's width, and also can be
            customised to be round shaped.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522container1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fpicsum.photos%252Fid%252F1011%252F500%252F500%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522responsive-image%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522standard-images%2522%2520id%253D%2522standard-images-round-area%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EStandard%2520Images%2520Round%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522container2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fpicsum.photos%252Fid%252F1011%252F500%252F500%2522%2520class%253D%2522circle-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
              framebox
              sandbox="allow-scripts allow-same-origin"
              title="responsive image"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-images-square-area">
            <h2 class="heading-text-utility-medium">Standard Images Square</h2>
          </div>
          <div class="container1">
            <img
              src="https://picsum.photos/id/1011/500/500"
              class="responsive-image"
              alt="responsive"
            />
          </div>

          <div id="standard-images-round-area">
            <h2 class="heading-text-utility-medium">Standard Images Round</h2>
          </div>
          <div class="container2">
            <img
              src="https://picsum.photos/id/1011/500/500"
              alt="responsive"
              class="circle-image"
            />
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
                  <a href="#standard-images-square-area">
                    Standard Images Square
                  </a>
                </li>
                <li>
                  <a href="#standard-images-round-area">
                    Standard Images Round
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};
export default ResponsiveImage;
