

export const NavBar = ({ setCategory }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            LATEST
            <img
              className="ms-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BBC_News_2022.svg/1200px-BBC_News_2022.svg.png"
              alt="Bootstrap"
              width="60"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul
              style={{ cursor: "pointer" }}
              className="navbar-nav text-center"
            >
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("technology")}>
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("business")}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("entertainment")}>
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("science")}>
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("sports")}>
                  Sports
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };