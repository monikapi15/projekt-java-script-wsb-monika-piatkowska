import { Formik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../common/contexts/DataContext";

const categories = ["Frontend", "Backend", "Testing", "UX Design"];
const levels = ["junior", "mid", "senior"];

function CoursesForm({ data }) {
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);

  console.log("before", data);

  return (
    <>
      <Formik
        initialValues={{
          name: data?.name || "To jest mój przykładowy tytuł",
          description: data?.description || "To jest mój przykładowy opis",
          excerpt: data?.excerpt || "To jest mój przykładowy krótki opis",
          categories: data?.categories || ["Frontend"],
          levels: data?.levels || ["mid"],
          url: data?.url || "https://www.youtube.com/watch?v=4bPpmWIpAIQ",
          photo:
            data?.photo ||
            "https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY.jpg",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("To pole jest wymagane"),
          description: Yup.string().required("To pole jest wymagane"),
          excerpt: Yup.string().required("To pole jest wymagane"),
          categories: Yup.array().required("To pole jest wymagane"),
          levels: Yup.array().required("To pole jest wymagane"),
          url: Yup.string().required("To pole jest wymagane"),
          photo: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (data?.id) {
              const editCourse = {
                id: data.id,
                ...data.values,
                ...values,
              };

              const courses = [...dataContext.courses];
              const index = courses.findIndex((elem) => elem.id === data.id);

              courses[index] = editCourse;
              dataContext.setCourses(courses);

              console.log(dataContext.courses);
            } else {
              const courseId = Math.random();
              const newCourse = { id: courseId, ...values };

              dataContext.setCourses([...dataContext.courses, newCourse]);
            }

            // toast("Kurs został dodany");
            data?.handleModal(false);
            setSubmitting(false);
            navigate("/courses");
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
          setFieldValue,
          setValues,
        }) => {
          const handleCategoriesChange = (elem) => {
            const categories = [...values.categories];
            const index = categories.indexOf(elem);

            if (index >= 0) {
              categories.splice(index, 1);
            } else {
              categories.push(elem);
            }

            setFieldValue("categories", categories);
          };

          const handleLevelsChange = (elem) => {
            const levels = [...values.levels];
            const index = levels.indexOf(elem);

            if (index >= 0) {
              levels.splice(index, 1);
            } else {
              levels.push(elem);
            }

            setFieldValue("levels", levels);
          };

          return (
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                />
                <label htmlFor="name">Nazwa</label>
                {errors.name && touched.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              <div className="form-floating my-4">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  name="description"
                  type="text"
                  className="form-control"
                  id="description"
                />
                <label htmlFor="description">Opis</label>
                {errors.description && touched.description && (
                  <small className="text-danger">{errors.description}</small>
                )}
              </div>

              <div className="form-floating my-4">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.excerpt}
                  name="excerpt"
                  type="text"
                  className="form-control"
                  id="excerpt"
                />
                <label htmlFor="excerpt">Krótki opis</label>
                {errors.excerpt && touched.excerpt && (
                  <small className="text-danger">{errors.excerpt}</small>
                )}
              </div>

              <article className="my-4">
                <h6>Kategorie</h6>
                <div className="d-flex">
                  {categories?.map((elem, key) => (
                    <div className="me-2" key={key}>
                      <input
                        onChange={() => handleCategoriesChange(elem)}
                        defaultChecked={
                          !!values.categories.find((item) => item === elem)
                        }
                        type="checkbox"
                        className="btn-check"
                        id={`checkbox-${elem}`}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor={`checkbox-${elem}`}
                      >
                        {elem}
                      </label>
                    </div>
                  ))}
                </div>
              </article>

              <article>
                <h6>Poziom</h6>
                <div className="d-flex">
                  {levels?.map((elem, key) => (
                    <div className="me-2" key={key}>
                      <input
                        onChange={() => handleLevelsChange(elem)}
                        defaultChecked={
                          !!values.levels.find((item) => item === elem)
                        }
                        type="checkbox"
                        className="btn-check"
                        id={`checkbox-${elem}`}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor={`checkbox-${elem}`}
                      >
                        {elem}
                      </label>
                    </div>
                  ))}
                </div>
              </article>

              <div className="form-floating my-4">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                  name="url"
                  type="text"
                  className="form-control"
                  id="url"
                />
                <label htmlFor="url">Link do kursu</label>
                {errors.url && touched.url && (
                  <small className="text-danger">{errors.url}</small>
                )}
              </div>

              <div className="form-floating my-4">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.photo}
                  name="photo"
                  type="text"
                  className="form-control"
                  id="photo"
                />
                <label htmlFor="photo">Link do obrazka</label>
                {errors.photo && touched.photo && (
                  <small className="text-danger">{errors.photo}</small>
                )}
              </div>

              <div className="d-flex justify-content-end">
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
                  {data?.id ? "Edytuj" : "Dodaj"}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
}

export default CoursesForm;
