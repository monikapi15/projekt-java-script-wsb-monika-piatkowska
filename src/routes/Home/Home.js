import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../common/contexts/DataContext";
import CoursesCard from "../courses/components/CoursesCard";
import { AuthContext } from "../../common/contexts/AuthContext";

function Home() {
  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);
  const featuredCourses = dataContext.courses.filter(
    (elem) => elem.featured === true
  );

  return (
    <div className="home">
      <section className="py-5 w-100 d-flex align-items-center header-section position-relative">
        <span className="background position-absolute start-0 top-0 w-100 h-100"></span>
        <span className="opacity position-absolute start-0 top-0 w-100 h-100"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <header className="text-left">
                <h1 className="mb-3 text-white">Zobacz nasze kursy!</h1>
                <p className="text-white-50">
                  Mamy najlepszą ofertę z kursami na rynku, za 200 zł
                  miesięcznie masz dostęp do wszystkich naszych kursów.
                </p>
                {!authContext.currentUser && (
                  <div className="d-flex mt-5">
                    <Link className="btn btn-lg btn-primary me-2" to={`/login`}>
                      Zaloguj się aby rozpocząć
                    </Link>
                  </div>
                )}
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-5">Zobacz jakie oferujemy kursy</h2>
            </div>
          </div>
          <div className="row g-3">
            {featuredCourses.map((elem) => (
              <div className="col-lg-4">
                <CoursesCard hideFooter={true} {...elem} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
