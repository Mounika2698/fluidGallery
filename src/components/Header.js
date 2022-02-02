import { useLocation } from "react-router";
const Header = () => {
  const Location = useLocation();
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-white p-0 navbar-dark">
        {" "}
        <button class="navbar-toggler" type="button" data-target="#navigation">
          {" "}
          <span class="navbar-toggler-icon"></span>{" "}
        </button>
        <div class="collapse navbar-collapse custom-navbar">
          <div class="logo-section">
            <span></span>
            <p>FLUID GALLERY</p>
          </div>
          <ul class="navbar-nav justify-content-end">
            <li
              class={Location.pathname == "/" ? "nav-item active" : "nav-item"}
            >
              {" "}
              <a href="/" class="nav-link">
                {" "}
                1st Fluid{" "}
              </a>{" "}
            </li>
            <li
              class={
                Location.pathname == "/secondFluid"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              {" "}
              <a href="/secondFluid" class="nav-link">
                {" "}
                2nd Fluid{" "}
              </a>{" "}
            </li>
            <li
              class={
                Location.pathname == "/thirdFluid"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              {" "}
              <a href="/thirdFluid" class="nav-link">
                {" "}
                3rd Fluid{" "}
              </a>{" "}
            </li>
            <li
              class={
                Location.pathname == "/column" ? "nav-item active" : "nav-item"
              }
            >
              {" "}
              <a href="/column" class="nav-link">
                {" "}
                Columns{" "}
              </a>{" "}
            </li>
            <li
              class={
                Location.pathname == "/message" ? "nav-item active" : "nav-item"
              }
            >
              {" "}
              <a href="/message" class="nav-link">
                {" "}
                Message{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
