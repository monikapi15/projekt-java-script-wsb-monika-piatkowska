import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-black mb-3">Curssero</h3>
          </div>
          <div className="col-lg-5">
            <p className="text-black-50 mb-1">
              Nasze najlepsze kursy na świecie są już dostępne online!
            </p>
          </div>
          <div className="col-lg-3 offset-lg-1 ">
            <aside className="d-flex flex-column mt-4 mt-lg-0">
              <h5>Strona</h5>
              <Link className="text-black-50 text-decoration-none" to="/">
                Strona główna
              </Link>
              <Link className="text-black-50 text-decoration-none" to="/login">
                Logowanie
              </Link>
            </aside>
          </div>
          <div className="col-lg-3">
            <aside className="d-flex flex-column mt-4 mt-lg-0">
              <h5>Social media</h5>
              <Link className="text-black-50 text-decoration-none" to="/">
                Facebook
              </Link>
              <Link className="text-black-50 text-decoration-none" to="/login">
                Twitter
              </Link>
            </aside>
          </div>
          <div className="col-12 mt-5 ">
            <div className="pt-3 border-top d-flex justify-content-end">
              <small className="font-monospace text-black-50">
                {" "}
                By Monika Piątkowska ~ WSB Programownie JAVA SCRIPT
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
