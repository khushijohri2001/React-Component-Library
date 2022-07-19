const Inputs = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">INPUT</h1>
          <p class="subtext">
            Easily extend form controls by adding text, buttons, or button
            groups on either side of textual inputs, custom selects, and custom
            file inputs.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253B%253Cdiv%2520class%253D%2522inputs%2522%253E%250A%2520%2520%253Ch1%253EPrimary%2520Inputs%253C%252Fh1%253E%250A%2520%2520%253Cdiv%2520class%253D%2522primary-inputs%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522email-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522email-input%2522%2520placeholder%253D%2522Email*%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522password-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522password-input%2522%2520placeholder%253D%2522Password*%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Ch1%253EError%2520Inputs%253C%252Fh1%253E%250A%2520%2520%253Cdiv%2520class%253D%2522error-inputs%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522error-email-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522error-email-input%2522%2520placeholder%253D%2522Email*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522input-message%2522%253E*This%2520field%2520is%2520required%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522password-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522error-password-input%2522%2520placeholder%253D%2522Password*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522input-message%2522%253E*This%2520field%2520is%2520required%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
              sandbox="allow-scripts allow-same-origin"
              title="inputs"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />
          <div id="standard-input-area">
            <h2 class="heading-text-utility-medium">Standard Inputs</h2>
          </div>

          <div class="inputs">
            <h1>Primary Inputs</h1>
            <div class="primary-inputs">
              <div class="email-container">
                <input type="text" class="email-input" placeholder="Email*" />
              </div>
              <div class="password-container">
                <input
                  type="text"
                  class="password-input"
                  placeholder="Password*"
                />
              </div>
            </div>

            <h1>Error Inputs</h1>
            <div class="error-inputs">
              <div class="error-email-container">
                <input
                  type="text"
                  class="error-email-input"
                  placeholder="Email*"
                />
                <p class="input-message">*This field is required</p>
              </div>
              <div class="password-container">
                <input
                  type="text"
                  class="error-password-input"
                  placeholder="Password*"
                />
                <p class="input-message">*This field is required</p>
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
                  <a href="#standard-input-area">Standard Inputs</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </right-aside>
    </>
  );
};

export default Inputs;
