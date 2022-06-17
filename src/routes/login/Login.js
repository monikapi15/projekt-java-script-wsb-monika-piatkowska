import LoginForm from "./components/LoginForm";
import PayGuard from "../../common/components/PayGuard";

function Login() {
  return (
    <div className="login">
      <section className="py-5 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <h3 className="mb-4 text-center">Zaloguj się aby kontynuować</h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
