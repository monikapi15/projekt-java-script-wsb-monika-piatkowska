import PayForm from "./components/PayForm";

function Pay() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h3 className="mb-4 text-center">Zapłać za dostęp</h3>
          </div>
          <div className="col-lg-6 offset-lg-3">
            <PayForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pay;
