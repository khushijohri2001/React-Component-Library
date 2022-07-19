import cartImg from "../images/cart-fill.svg";
import productImg from "../images/product.jpg";
import circleImg from "../images/x-circle-fill.svg";

const Card = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">CARDS</h1>
          <p class="subtext">
            Bootstrap’s cards provide a flexible and extensible content
            container with multiple variants and options.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253C%21--%2520Card%2520with%2520Badge%2520--%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522standard-cards%2522%2520id%253D%2522cards-with-badges-area%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ECard%2520with%2520Badge%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card1-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522save-badge1%2522%253ESave%2520Rs.500%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%2520alt%253D%2522%2522%2520class%253D%2522product-img1%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-name1%2522%253EDon%27t%2520Stop%2520Reusable%2520Notebook%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-description1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520With%2520a%25201.2mm%2520Fine%2520Tip%2520Pen%2520%2526%2520a%2520Napkin%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522price1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B9499%2520%253Cspan%2520class%253D%2522strike-price1%2522%253E%2520%25E2%2582%25B9999%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-discount1%2522%253E%2850%2525%29%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522button-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522add-to-cart1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fcart-fill.svg%2522%2520class%253D%2522cart-icon1%2522%2520%252F%253EAdd%2520to%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Cart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%21--%2520card%2520with%2520text%2520overlay%2520%2520--%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522standard-cards%2522%2520id%253D%2522cards-with-text-overlay-area%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ECard%2520with%2520Text%2520Overlay%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card2-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522overlay-text2%2522%253EOut%2520of%2520Stock%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522overlay-img2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%2520alt%253D%2522%2522%2520class%253D%2522product-img2%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-name2%2522%253EDon%27t%2520Stop%2520Reusable%2520Notebook%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-description2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520With%2520a%25201.2mm%2520Fine%2520Tip%2520Pen%2520%2526%2520a%2520Napkin%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522price2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B9499%2520%253Cspan%2520class%253D%2522strike-price2%2522%253E%2520%25E2%2582%25B9999%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-discount2%2522%253E%2850%2525%29%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522button-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522add-to-cart2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fimages%252Fcart-fill.svg%2522%2520class%253D%2522cart-icon2%2522%2520%252F%253EAdd%2520to%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Cart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%21--%2520Horizontal%2520Ca"
              sandbox="allow-scripts allow-same-origin"
              title="card"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />

          {/* Card with Badge  */}
          <div id="cards-with-badges-area">
            <h2 class="heading-text-utility-medium">Card with Badge</h2>
          </div>
          <div class="card1-container">
            <div class="save-badge1">Save Rs.500</div>
            <img src={productImg} alt="" class="product-img1" />

            <div class="product-name1">Don't Stop Reusable Notebook</div>
            <div class="product-description1">
              With a 1.2mm Fine Tip Pen & a Napkin
            </div>
            <div class="price1">
              ₹499 <span class="strike-price1"> ₹999</span>
              <span class="product-discount1">(50%)</span>
            </div>

            <button class="add-to-cart1">
              <img src={cartImg} class="cart-icon1" alt="card" />
              Add to Cart
            </button>
          </div>

          {/* card with text overlay   */}
          <div class="standard-cards" id="cards-with-text-overlay-area">
            <h2>Card with Text Overlay</h2>
          </div>
          <div class="card2-container">
            <p class="overlay-text2">Out of Stock</p>
            <div class="overlay-img2">
              <img src={productImg} alt="" class="product-img2" />

              <div class="product-name2">Don't Stop Reusable Notebook</div>
              <div class="product-description2">
                With a 1.2mm Fine Tip Pen & a Napkin
              </div>
              <div class="price2">
                ₹499 <span class="strike-price2"> ₹999</span>
                <span class="product-discount2">(50%)</span>
              </div>

              <button class="add-to-cart2">
                <img src={cartImg} class="cart-icon2" alt="card" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Horizontal Card --> */}
          <div class="standard-cards" id="horizontal-card-area">
            <h2>Horizontal Card</h2>
          </div>
          <div class="card3-container">
            <div class="save-badge3">Save Rs.500</div>
            <img src={productImg} alt="" class="product-img3" />
            <div class="card-content3">
              <div class="product-name3">Don't Stop Reusable Notebook</div>
              <div class="product-description3">
                With a 1.2mm Fine Tip Pen & a Napkin
              </div>
              <div class="price3">
                ₹499 <span class="strike-price3"> ₹999</span>
                <span class="product-discount3">(50%)</span>
              </div>

              <button class="add-to-cart3">
                <img src={cartImg} class="cart-icon3" alt="card" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* <!-- Card with Shadow --> */}
          <div class="standard-cards" id="cards-with-badges-area">
            <h2>Card with Shadow</h2>
          </div>
          <div class="card1-container">
            <img src={productImg} alt="" class="product-img1" />

            <div class="product-name1">Don't Stop Reusable Notebook</div>
            <div class="product-description1">
              With a 1.2mm Fine Tip Pen & a Napkin
            </div>
            <div class="price1">
              ₹499 <span class="strike-price1"> ₹999</span>
              <span class="product-discount1">(50%)</span>
            </div>

            <button class="add-to-cart1">
              <img src={cartImg} class="cart-icon1" alt="card" />
              Add to Cart
            </button>
          </div>

          {/* <!--  Text only Card --> */}
          <div class="standard-cards" id="card-with-Text-area">
            <h2>Text only Card</h2>
          </div>
          <div class="card4-container">
            <div class="product-name4">Don't Stop Reusable Notebook</div>
            <div class="product-description4">
              With a 1.2mm Fine Tip Pen & a Napkin
            </div>
            <div class="price4">
              ₹499 <span class="strike-price4"> ₹999</span>
              <span class="product-discount4">(50%)</span>
            </div>

            <button class="add-to-cart4">
              <img src={cartImg} class="cart-icon4" alt="card" />
              Add to Cart
            </button>
          </div>

          {/* <!-- Card with dismiss --> */}
          <div class="standard-cards" id="card-with-dismiss-area">
            <h2>Card with Dismiss</h2>
          </div>
          <div class="card5-container">
            <div class="dismiss5">
              <img src={circleImg} alt="card" />
            </div>
            <img src={productImg} alt="" class="product-img5" />

            <div class="product-name5">Don't Stop Reusable Notebook</div>
            <div class="product-description5">
              With a 1.2mm Fine Tip Pen & a Napkin
            </div>
            <div class="price5">
              ₹499 <span class="strike-price5"> ₹999</span>
              <span class="product-discount5">(50%)</span>
            </div>

            <button class="add-to-cart5">
              <img src={cartImg} class="cart-icon5" alt="card" />
              Add to Cart
            </button>
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
                  <a href="#cards-with-badges-area">Cards with Badge</a>
                </li>
                <li>
                  <a href="#cards-with-text-overlay-area">
                    Cards with Text Overlay
                  </a>
                </li>
                <li>
                  <a href="#horizontal-card-area">Horizontal Cards</a>
                </li>
                <li>
                  <a href="#card-with-Text-area">Cards with Text</a>
                </li>
                <li>
                  <a href="#card-with-dismiss-area">Cards with Dismiss</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Card;
