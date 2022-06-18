import * as Yup from "yup";
import { Formik } from "formik";
import { useContext } from "react";
import { AuthContext } from "../../../common/contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

function PayForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: authContext.currentUser?.email,
        name: "Jan Kowalski",
        card: "4242424242424242",
        code: "424",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("To pole jest wymagane"),
        name: Yup.string().required("To pole jest wymagane"),
        card: Yup.string()
          .min(16, "Number karty ma zawierać 16 znaków")
          .max(16, "Number karty ma zawierać 16 cyfr")
          .required("To pole jest wymagane"),
        code: Yup.string()
          .min(3, "Kod bezpieczeństwa musi posiadać 3 znaki")
          .max(3, "Kod bezpieczeństwa musi posiadać 3 znaki")
          .required("To pole jest wymagane"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // const currentUserIndex = users.findIndex(elem => elem.id === authContext.currentUser.id);
          // users[currentUserIndex].access = new Date();

          let date = new Date();
          date.setDate(date.getDate() + 30);

          const time = date.getTime();

          localStorage.setItem("access", time);

          navigate("/courses");
          setSubmitting(false);
        }, 1000);
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
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <h3>
              Price: <span className="text-primary">200</span>
              <span className="lead ms-1 text-black-50">PLN</span>
            </h3>
            <p className="text-black-50">
              Za 200 zł masz nieograniczony dostęp od naszych kursów na 30 dni
            </p>

            <div className="form-floating mb-3">
              <input
                disabled
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="text"
                className="form-control"
                id="email"
              />
              <label htmlFor="email">Email</label>
              {errors.email && touched.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <article className="border p-4 shadow">
              <h6 className="mb-3">Informacje dotyczące płatności</h6>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                />
                <label htmlFor="name">Imię i nazwisko</label>
                {errors.name && touched.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.card}
                  name="card"
                  type="text"
                  className="form-control"
                  id="card"
                />
                <label htmlFor="card">Number karty</label>
                {errors.card && touched.card && (
                  <small className="text-danger">{errors.card}</small>
                )}
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code}
                  name="code"
                  type="text"
                  className="form-control"
                  id="card"
                />
                <label htmlFor="code">Kod bezpieczeństwa</label>
                {errors.code && touched.code && (
                  <small className="text-danger">{errors.code}</small>
                )}
              </div>
            </article>

            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span
                    className="spinner-border text-uppercase spinner-border-sm me-2"
                    role="status"
                  ></span>
                )}
                Kup dostęp
              </button>
            </div>
            <ToastContainer />
          </form>
        );
      }}
    </Formik>
  );
}

export default PayForm;
