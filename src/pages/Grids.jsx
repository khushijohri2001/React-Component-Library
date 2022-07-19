import cartImg from "../images/cart-fill.svg";
import productImg from "../images/product.jpg";

const Grids = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}

      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">GRIDS</h1>
          <p class="subtext">
            CSS Grid is a powerful tool that allows for two-dimensional layouts
            to be created on the web.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522standard-grids%2522%2520id%253D%2522standard-grids-2-area%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EStandard%2520Grids-2%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522deliver-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522deliver-address%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EDeliver%2520to%253A%2520%253Cspan%2520class%253D%2522bold-name%2522%253EKhushi%2520Johri%2520%253C%252Fspan%253E%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520A-16-A%252C%2520Shivpuri%252C%2520Vinayak%2520Path%252C%2520Sanganer%2520%28Near%2520Airport%29%252C%2520Jaipur%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Rajasthan%252C%2520India.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522change-address%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522change-btn%2522%253EChange%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522standard-grids%2522%2520id%253D%2522standard-grids-3-area%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EStandard%2520Grids-3%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522products-container-grid%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid3-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522save-badge-grid%2522%253ESave%2520Rs.500%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522product-img-grid%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-name-grid%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Don%27t%2520Stop%2520Reusable%2520Notebook%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-description-grid%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520With%2520a%25201.2mm%2520Fine%2520Tip%2520Pen%2520%2526%2520a%2520Napkin%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522price-grid%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B9499%2520%253Cspan%2520class%253D%2522strike-price-grid%2522%253E%2520%25E2%2582%25B9999%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-discount-grid%2522%253E%2850%2525%29%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522button-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522add-to-cart-grid%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522..%252Fimages%252Fcart-fill.svg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522cart-icon-grid%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253EAdd%2520to%2520Cart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid3-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522save-badge-grid%2522%253ESave%2520Rs.500%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522..%252Fimages%252Fproduct.jpg%2522%250A%2520%2520%2520%2520%2520%2520"
              sandbox="allow-scripts allow-same-origin"
              title="grids"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />

          <div id="standard-grids-2-area">
            <h2 class="heading-text-utility-medium">Standard Grids-2</h2>
          </div>
          <div class="deliver-container">
            <div class="deliver-address">
              <p>
                Deliver to: <span class="bold-name">Khushi Johri </span>
              </p>
              <p>
                A-16-A, Shivpuri, Vinayak Path, Sanganer (Near Airport), Jaipur,
                Rajasthan, India.
              </p>
            </div>
            <div class="change-address">
              <button class="change-btn">Change</button>
            </div>
          </div>

          <div class="standard-grids" id="standard-grids-3-area">
            <h2>Standard Grids-3</h2>
          </div>
          <div class="grid-3">
            <div class="products-container-grid">
              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>

              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>

              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>

              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>

              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>

              <div class="grid3-container">
                <div class="save-badge-grid">Save Rs.500</div>
                <img src={productImg} alt="" class="product-img-grid" />

                <div class="product-name-grid">
                  Don't Stop Reusable Notebook
                </div>
                <div class="product-description-grid">
                  With a 1.2mm Fine Tip Pen & a Napkin
                </div>
                <div class="price-grid">
                  ₹499 <span class="strike-price-grid"> ₹999</span>
                  <span class="product-discount-grid">(50%)</span>
                </div>

                <button class="add-to-cart-grid">
                  <img src={cartImg} class="cart-icon-grid" alt="grid" />
                  Add to Cart
                </button>
              </div>
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
                  <a href="#standard-grids-2-area">Standard Grids-2</a>
                </li>
                <li>
                  <a href="#standard-grids-3-area">Standard Grids-3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Grids;
