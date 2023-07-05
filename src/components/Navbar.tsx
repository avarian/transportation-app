import icon from "../assets/icon.png";

function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-tertiary"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={icon}
              alt="Icon"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            MyNamus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kai Train
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#e3f2fd" }}
                >
                  <li>
                    <a className="dropdown-item" href="/kai">
                      Train Schedule
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
