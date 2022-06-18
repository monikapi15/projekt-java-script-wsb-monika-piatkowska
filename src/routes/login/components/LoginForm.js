import { Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../../common/contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../common/contexts/DataContext";

function LoginForm() {
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <Formik
      // initialValues={{email: 'monika@user.pl', password: '123'}}
      initialValues={{ email: "monika@teacher.pl", password: "123" }}
      // initialValues={{email: 'monika@admin.pl', password: '123'}}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Niewłaściwy adres email")
          .required("To pole jest wymagane"),
        password: Yup.string().required("To pole jest wymagane"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const currentUser = dataContext.users.find(
            (elem) =>
              elem.email === values.email && elem.password === values.password
          );

          if (currentUser) {
            localStorage.setItem("auth", JSON.stringify(currentUser));
            authContext.setCurrentUser(currentUser || null);
            navigate("/courses");
          } else {
            toast("Błędny email lub hasło. Spróbuj ponownie");
          }

          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              type="email"
              className="form-control"
              id="email"
            />
            <label htmlFor="email">Email</label>
            {errors.email && touched.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>

          <div className="form-floating my-4">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              type="password"
              className="form-control"
              id="password"
            />
            <label htmlFor="password">Hasło</label>
            {errors.password && touched.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="spinner-border text-uppercase spinner-border-sm me-2"></span>
              )}
              Zaloguj się
            </button>
          </div>
          <ToastContainer />
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
