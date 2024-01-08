import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="fs-1 text-warning text-decoration-none" to="/">
            LOGO
          </Link>
          <button onClick={() => navigate(-1)} className="btn btn-danger">
            BACK
          </button>
          <button onClick={() => navigate(1)} className="btn btn-warning">
            FORWARD
          </button>
          <nav>
            <ul className="list-unstyled d-flex align-items-center gap-4 fs-4">
              <li>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/users">
                  Users
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
