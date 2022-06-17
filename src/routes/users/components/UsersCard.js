import React, {useContext} from "react";
import {DataContext} from "../../../common/contexts/DataContext";

function UsersCard({email, role, id}) {
  const dataContext = useContext(DataContext);

  const deleteUser = () => {
    const users = dataContext.users.filter(elem => elem.id !== id);
    dataContext.setUsers(users);
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{email} {id}</h5>
        <p className="card-text mb-1">Role {role}</p>
      </div>
      <div className="card-footer py-3 d-flex justify-content-end">
        <button onClick={deleteUser} className="btn btn-sm btn-danger" type="button">
          Usuń
        </button>
      </div>
    </div>
  );
}

export default UsersCard;
