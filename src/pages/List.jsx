import productImg from "../images/product.jpg";

const List = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">LISTS</h1>
          <p class="subtext">
            Lists are used to group together related pieces of information so
            they are clearly associated with each other and easy to read.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522list-main-area%2522%253E%250A%2520%2520%253Ch1%253ESpaced%2520%28Normal%2520List%29%253C%252Fh1%253E%250A%2520%2520%253Cdiv%2520class%253D%2522spaced-list%2522%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522list-inline%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253EHome%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253EAbout%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253EProducts%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253EContact%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Ch1%253EStacked%2520%28Notification%2520List%29%253C%252Fh1%253E%250A%2520%2520%253Cdiv%2520class%253D%2522stacked-list%2522%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522list-inline-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%2520class%253D%2522product-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%2522notification-list%2522%253ENotification%25201%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%2520class%253D%2522product-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%2522notification-list%2522%253ENotification%25202%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item-notification%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%2520class%253D%2522product-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%2522notification-list%2522%253ENotification%25203%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
              sandbox="allow-scripts allow-same-origin"
              title="list"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-lists-area">
            <h2 class="heading-text-utility-medium">Standard Lists</h2>
          </div>

          <div class="list-main-area">
            <h1 class="heading-text-utility-bigger">Spaced (Normal List)</h1>
            <div class="spaced-list">
              <ul class="list-inline">
                <li class="list-inline-item">Home</li>
                <li class="list-inline-item">About</li>
                <li class="list-inline-item">Products</li>
                <li class="list-inline-item">Contact</li>
              </ul>
            </div>

            <h1 class="heading-text-utility-bigger">
              Stacked (Notification List)
            </h1>
            <div class="stacked-list">
              <ul class="list-inline-notification">
                <li class="list-inline-item-notification">
                  <img src={productImg} class="product-img" />
                  <h2 class="notification-list">Notification 1</h2>
                </li>
                <li class="list-inline-item-notification">
                  <img src={productImg} class="product-img" />
                  <h2 class="notification-list">Notification 2</h2>
                </li>
                <li class="list-inline-item-notification">
                  <img src={productImg} class="product-img" />
                  <h2 class="notification-list">Notification 3</h2>
                </li>
              </ul>
            </div>
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
                  <a href="#standard-lists-area">Standard Lists</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};
export default List;
