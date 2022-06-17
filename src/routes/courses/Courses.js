import CoursesList from "./components/CoursesList";
import PayGuard from "../../common/components/PayGuard";
import PureModal from "react-pure-modal";
import CoursesForm from "./components/CoursesForm";
import RolesGuard from "../../common/components/RolesGuard";
import { useState } from "react";

function Courses() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  return (
    <PayGuard>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <h3 className="mb-5 text-center">Lista kursów</h3>
            </div>
          </div>
          <div className="row">
            <CoursesList />
          </div>
          <div className="col-12">
            <RolesGuard roles={["teacher", "admin"]}>
              <button
                type="button"
                onClick={handleModal}
                className="btn btn-primary"
              >
                Dodaj nowy
              </button>
              <PureModal
                className="course-modal bg-white p-5"
                replace={true}
                isOpen={modal}
                onClose={() => setModal(false)}
              >
                <div className="d-flex justify-content-end">
                  <button
                    class="btn btn-outline-secondary btn-sm"
                    onClick={() => setModal(false)}
                  >
                    Zamknij
                  </button>
                </div>
                <h4 className="mb-4">Dodaj nowy kurs</h4>
                <CoursesForm data={{ handleModal: setModal }} />
              </PureModal>
            </RolesGuard>
          </div>
        </div>
      </section>
    </PayGuard>
  );
}

export default Courses;
