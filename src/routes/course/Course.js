import {Link, useParams} from "react-router-dom";
import PayGuard from "../../common/components/PayGuard";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../common/contexts/DataContext";

function Course() {
  const [detail, setDetail] = useState(null);
  const params = useParams();
  const dataContext = useContext(DataContext);

  useEffect(() => {
    const data = dataContext?.courses.find(elem => elem?.id == params?.id);
    setDetail(data);
  }, [])

  return (
    <PayGuard>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Link className="btn btn-sm btn-outline-secondary mb-2" to={`/courses`}>Powrót do listy kursów</Link>
            </div>
            <div className="col-12">
              <h1 className="mb-4">{detail?.name}</h1>
            </div>
            <div className="col-lg-7">
              {detail?.photo && <img className="w-100 mb-4" src={detail?.photo} />}
              <p className="text-black-50">{detail?.description}</p>
              {detail?.url && <a className="btn btn-lg btn-primary mt-4 me-2" target="_blank" href={detail?.url}>Wyświetl kurs</a>}
            </div>
            <div className="col-lg-4 offset-lg-1">
              <aside className="position-sticky top-0 start-0">
                <div className="py-4 border-bottom">
                  <h5 className="mb-3">Kategoria</h5>
                  {detail?.categories?.map(category => (
                    <span className="badge py-2 px-3 rounded-pill bg-dark me-1 mb-1">{category}</span>
                  ))}
                </div>

                <div className="py-4">
                  <h5 className="mb-3 ">Poziom</h5>
                  {detail?.levels?.map(level => (
                    <span className="badge py-2 px-3 rounded-pill bg-dark me-1 mb-1">{level}</span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </PayGuard>
  );
}

export default Course;
