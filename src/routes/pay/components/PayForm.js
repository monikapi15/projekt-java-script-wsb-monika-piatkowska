import * as Yup from "yup";
import {Formik} from "formik";
import {useContext} from "react";
import {AuthContext} from "../../../common/contexts/AuthContext";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router";

function PayForm() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: authContext.currentUser?.email,
      }}
      validationSchema={Yup.object({
        email: Yup.string().required('Required'),
      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          toast("Wow so easy!");
          // const currentUserIndex = users.findIndex(elem => elem.id === authContext.currentUser.id);
          // users[currentUserIndex].access = new Date();

          let date = new Date();
          date.setDate(date.getDate() + 30);

          const time = date.getTime();

          localStorage.setItem('access', time);

          navigate('/courses');
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
            <h3>Price: <span className="text-primary">200</span><span className="lead ms-1 text-black-50">PLN</span></h3>
            <p className="text-black-50">Za 200 zł masz nieograniczony dostęp od naszych kursów na 30 dni</p>

            <div className="form-floating">
              <input
                disabled
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                type="text"
                className="form-control"
                id="email"/>
              <label htmlFor="email">Email</label>
              {errors.email && touched.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting && <span className="spinner-border text-uppercase spinner-border-sm me-2" role="status"></span>}
                Kup dostęp
              </button>
            </div>
            <ToastContainer />
          </form>
        )
      }}
    </Formik>
  );
}

export default PayForm;
