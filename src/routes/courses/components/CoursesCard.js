import { Link } from "react-router-dom";
import RolesGuard from "../../../common/components/RolesGuard";
import { useContext, useState } from "react";
import { DataContext } from "../../../common/contexts/DataContext";
import CoursesForm from "./CoursesForm";
import PureModal from "react-pure-modal";

function CoursesCard({
  name,
  excerpt,
  categories,
  description,
  levels,
  id,
  photo,
  url,
  hideFooter,
}) {
  const dataContext = useContext(DataContext);
  const [editModal, setEditModal] = useState(false);

  const deleteCourse = () => {
    const courses = dataContext.courses.filter((elem) => elem.id !== id);
    dataContext.setCourses(courses);
  };

  const handleEditModal = () => {
    setEditModal(true);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <header className="mb-2">
          {categories?.map((category) => (
            <span className="badge py-2 px-3 rounded-pill bg-dark me-1 mb-1">
              {category}
            </span>
          ))}
        </header>

        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-3">{excerpt}</p>

        {levels?.map((level) => (
          <span className="badge py-2 px-3 rounded-pill bg-dark me-1 mb-1">
            {level}
          </span>
        ))}

        {!hideFooter && (
          <>
            <div className="my-3 border-bottom"></div>

            <footer className="d-flex justify-content-end">
              <RolesGuard roles={["admin", "teacher"]}>
                <button
                  onClick={deleteCourse}
                  type="button"
                  className="btn btn-danger me-2"
                >
                  Usuń
                </button>
                <button
                  onClick={handleEditModal}
                  type="button"
                  className="btn btn-warning me-2"
                >
                  Edytuj
                </button>
              </RolesGuard>
              <Link
                className="btn btn-outline-secondary me-2"
                to={`/courses/${id}`}
              >
                Szczegóły
              </Link>
            </footer>
            <PureModal
              className="course-modal bg-white p-5"
              replace={true}
              isOpen={editModal}
              onClose={() => setEditModal(false)}
            >
              <div className="d-flex justify-content-end">
                <button
                  class="btn btn-outline-secondary btn-sm"
                  onClick={() => setEditModal(false)}
                >
                  Zamknij
                </button>
              </div>
              <h4 className="mb-4">Dodaj nowy kurs</h4>
              <CoursesForm
                data={{
                  name,
                  excerpt,
                  categories,
                  description,
                  levels,
                  id,
                  photo,
                  url,
                  handleModal: setEditModal,
                }}
              />
            </PureModal>
          </>
        )}
      </div>
    </div>
  );
}

export default CoursesCard;
