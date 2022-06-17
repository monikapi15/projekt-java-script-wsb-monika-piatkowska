import UsersList from "./components/UsersList";

function Users() {

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h3 className="mb-5 text-center">Lista użytkowników</h3>
          </div>
        </div>
        <div className="row">
          <UsersList />
        </div>
      </div>
    </section>
  );
}

export default Users;
