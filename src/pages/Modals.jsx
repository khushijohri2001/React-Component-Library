const Modals = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">MODALS</h1>
          <p class="subtext">
            Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
            for lightboxes, user notifications, or completely custom content.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253B%253Cdiv%2520class%253D%2522modals%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522modal-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522top%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-title%2522%253ECard%2520Title%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522cross%2522%253EX%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522middle%2522%253E%250A%2520%2520%2520%2520%2520%2520Lorem%252C%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Autem%2520sequi%250A%2520%2520%2520%2520%2520%2520magni%2520est%2520culpa%2520consequatur%2520sunt%2520id%2520praesentium%2520accusantium%2520aspernatur%250A%2520%2520%2520%2520%2520%2520cumque%252C%2520ullam%2520nesciunt%2520illum%252C%2520tempora%2520animi%2520quo%2520pariatur%252C%2520veritatis%250A%2520%2520%2520%2520%2520%2520nostrum%2520vitae%253F%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522bottom%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522child-one%2522%253EYes%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522child-two%2522%253ENo%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
              sandbox="allow-scripts allow-same-origin"
              title="modals"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-modal-area">
            <h2 class="heading-text-utility-medium">Standard Modals</h2>
          </div>

          <div class="modals">
            <div class="modal-container">
              <div class="top">
                <div class="card-title">Card Title</div>
                <div class="cross">X</div>
              </div>
              <div class="middle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                sequi magni est culpa consequatur sunt id praesentium
                accusantium aspernatur cumque, ullam nesciunt illum, tempora
                animi quo pariatur, veritatis nostrum vitae?
              </div>
              <div class="bottom">
                <div class="child-one">Yes</div>
                <div class="child-two">No</div>
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
                  <a href="#standard-modals-area">Standard Modals</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};
export default Modals;
