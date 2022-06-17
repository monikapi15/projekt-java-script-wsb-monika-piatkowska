import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AuthGuard from "./AuthGuard";
import RolesGuard from "./RolesGuard";

function Navbar() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("login");
    localStorage.setItem("auth", "");
    authContext.setCurrentUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            Courssero
          </Link>

          <AuthGuard>
            <span className="navbar-text">
              {authContext?.currentUser?.email}
            </span>
          </AuthGuard>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Strona Główna
              </Link>
            </li>

            {!authContext?.currentUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Zaloguj
                </Link>
              </li>
            )}
            <AuthGuard>
              <RolesGuard roles={["admin"]}>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Użytkownicy
                  </Link>
                </li>
              </RolesGuard>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Kursy
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => logout()}
                  className="nav-link bg-transparent border-0"
                >
                  Wyloguj się
                </button>
              </li>
            </AuthGuard>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
