import { CheckCircle, Error, Report, Warning } from "@material-ui/icons";

const Alert = ({ funcAside }) => {
  return (
    <>
      {funcAside(true)}
      <main>
        <div class="component-container">
          <h1 class="heading-text-utility-bigger">ALERT</h1>
          <p class="subtext">
            Alerts are used to attract user's attention for important
            information without interrupting the user's flow.
          </p>
          <hr color="yellow" size="1" />
          <div class="snippet">
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=52px&ln=false&fl=1&fm=Hack&fs=10px&lh=140%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522alerts%2522%253E%250A%2520%2520%253Cp%2520class%253D%2522primary-alert%2522%253EIt%27s%2520Primary%2520Alert%253C%252Fp%253E%250A%2520%2520%253Cp%2520class%253D%2522secondary-alert%2522%253EIt%27s%2520Secondary%2520Alert%253C%252Fp%253E%250A%2520%2520%253Cp%2520class%253D%2522error-alert%2522%253E%250A%2520%2520%2520%2520%253Csvg%250A%2520%2520%2520%2520%2520%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%250A%2520%2520%2520%2520%2520%2520width%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520height%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520fill%253D%2522currentColor%2522%250A%2520%2520%2520%2520%2520%2520class%253D%2522bi%2520bi-exclamation-circle-fill%2520error-icon%2522%250A%2520%2520%2520%2520%2520%2520viewBox%253D%25220%25200%252016%252016%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cpath%2520d%253D%2522M16%25208A8%25208%25200%25201%25201%25200%25208a8%25208%25200%25200%25201%252016%25200zM8%25204a.905.905%25200%25200%25200-.9.995l.35%25203.507a.552.552%25200%25200%25200%25201.1%25200l.35-3.507A.905.905%25200%25200%25200%25208%25204zm.002%25206a1%25201%25200%25201%25200%25200%25202%25201%25201%25200%25200%25200%25200-2z%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsvg%253E%250A%2520%2520%2520%2520It%27s%2520an%2520Error%250A%2520%2520%253C%252Fp%253E%250A%2520%2520%253Cp%2520class%253D%2522warning-alert%2522%253E%250A%2520%2520%2520%2520%253Csvg%250A%2520%2520%2520%2520%2520%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%250A%2520%2520%2520%2520%2520%2520width%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520height%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520fill%253D%2522currentColor%2522%250A%2520%2520%2520%2520%2520%2520class%253D%2522bi%2520bi-exclamation-triangle-fill%2520warning-icon%2522%250A%2520%2520%2520%2520%2520%2520viewBox%253D%25220%25200%252016%252016%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cpath%2520d%253D%2522M8.982%25201.566a1.13%25201.13%25200%25200%25200-1.96%25200L.165%252013.233c-.457.778.091%25201.767.98%25201.767h13.713c.889%25200%25201.438-.99.98-1.767L8.982%25201.566zM8%25205c.535%25200%2520.954.462.9.995l-.35%25203.507a.552.552%25200%25200%25201-1.1%25200L7.1%25205.995A.905.905%25200%25200%25201%25208%25205zm.002%25206a1%25201%25200%25201%25201%25200%25202%25201%25201%25200%25200%25201%25200-2z%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsvg%253E%250A%2520%2520%2520%2520Warning%2520Alert%250A%2520%2520%253C%252Fp%253E%250A%2520%2520%253Cp%2520class%253D%2522success-alert%2522%253E%250A%2520%2520%2520%2520%253Csvg%250A%2520%2520%2520%2520%2520%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%250A%2520%2520%2520%2520%2520%2520width%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520height%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520fill%253D%2522currentColor%2522%250A%2520%2520%2520%2520%2520%2520class%253D%2522bi%2520bi-check-circle-fill%2520success-icon%2522%250A%2520%2520%2520%2520%2520%2520viewBox%253D%25220%25200%252016%252016%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cpath%2520d%253D%2522M16%25208A8%25208%25200%25201%25201%25200%25208a8%25208%25200%25200%25201%252016%25200zm-3.97-3.03a.75.75%25200%25200%25200-1.08.022L7.477%25209.417%25205.384%25207.323a.75.75%25200%25200%25200-1.06%25201.06L6.97%252011.03a.75.75%25200%25200%25200%25201.079-.02l3.992-4.99a.75.75%25200%25200%25200-.01-1.05z%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsvg%253E%250A%2520%2520%2520%2520Success%250A%2520%2520%253C%252Fp%253E%250A%2520%2520%253Cp%2520class%253D%2522info-alert%2522%253E%250A%2520%2520%2520%2520%253Csvg%250A%2520%2520%2520%2520%2520%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%250A%2520%2520%2520%2520%2520%2520width%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520height%253D%252216%2522%250A%2520%2520%2520%2520%2520%2520fill%253D%2522currentColor%2522%250A%2520%2520%2520%2520%2520%2520class%253D%2522bi%2520bi-info-circle-fill%2520info-icon%2522%250A%2520%2520%2520%2520%2520%2520viewBox%253D%25220%25200%252016%252016%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cpath%2520d%253D%2522M8%252016A8%25208%25200%25201%25200%25208%25200a8%25208%25200%25200%25200%25200%252016zm.93-9.412-1%25204.705c-.07.34.029.533.304.533.194%25200%2520.487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703%25200-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381%25202.29-.287zM8%25205.5a1%25201%25200%25201%25201%25200-2%25201%25201%25200%25200%25201%25200%25202z%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsvg%253E%250A%2520%2520%2520%2520Information%250A%2520%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
              style={{
                overflow: "hidden",
                width: "800px",
                height: "184px",
                border: "0",
                transform: "scale(1)"
              }}
              sandbox="allow-scripts allow-same-origin"
              title="alert"
            ></iframe>
          </div>
          <hr color="yellow" size="1" />

          <div id="standard-area">
            <h2 class="heading-text-utility-medium">Standard Alerts</h2>
          </div>
          <div class="alerts">
            <p class="primary-alert alert">It's Primary Alert</p>
            <p class="secondary-alert alert">It's Secondary Alert</p>
            <p class="error-alert alert">
              <Error className="error-icon" />
              It's an Error
            </p>

            <p class="warning-alert alert">
              <Warning className="warning-icon" /> Warning Alert
            </p>

            <p class="success-alert alert">
              <CheckCircle className="success-icon" />
              Success
            </p>
            <p class="info-alert alert">
              <Report className="info-icon" />
              Information
            </p>
          </div>
        </div>
      </main>

      <right-aside>
        <ul class="nav-list-main">
          <li>
            <h3 class="on-this-page">On this page</h3>
            <ul class="nav-list-sub">
              <li>
                <a href="#standard-area">Standard Alert</a>
              </li>
            </ul>
          </li>
        </ul>
      </right-aside>
    </>
  );
};

export default Alert;
