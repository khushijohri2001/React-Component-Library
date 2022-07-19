import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var( --fifth-color)" : ""
  });
  return (
    <>
      <left-aside>
        <section class="drawer-nav">
          <ul class="nav-list-main">
            <li class="home">
              <NavLink to="/" style={getActiveStyle}>
                Home
              </NavLink>
            </li>
            <ul class="nav-list-sub">
              <li>
                <NavLink to="/installation" style={getActiveStyle}>
                  Installation
                </NavLink>
              </li>
            </ul>
            <li class="components">
              <h3 class="list-components">Components</h3>
              <ul class="nav-list-sub">
                <li>
                  <NavLink to="/alert" style={getActiveStyle}>
                    Alert
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/avatars"
                    style={getActiveStyle}
                    style={getActiveStyle}
                  >
                    Avatars
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/badges" style={getActiveStyle}>
                    Badges
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/buttons" style={getActiveStyle}>
                    Button
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cards" style={getActiveStyle}>
                    Card
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/grids" style={getActiveStyle}>
                    Grids
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/responsive-images" style={getActiveStyle}>
                    Images
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/inputs" style={getActiveStyle}>
                    Inputs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/list" style={getActiveStyle}>
                    List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/modals" style={getActiveStyle}>
                    Modals
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/navigation" style={getActiveStyle}>
                    Navigation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rating" style={getActiveStyle}>
                    Rating
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/snackbar" style={getActiveStyle}>
                    Snackbar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/text" style={getActiveStyle}>
                    Text Utilities
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </left-aside>
    </>
  );
};

export default LeftAside;
