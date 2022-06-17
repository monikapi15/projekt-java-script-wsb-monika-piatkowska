import UsersCard from "./UsersCard";
import {useContext} from "react";
import {DataContext} from "../../../common/contexts/DataContext";

function UsersList() {
  const dataContext = useContext(DataContext);

  return dataContext.users?.map((elem, key) => {
    return (
      <div key={key} className="col-lg-4">
        <UsersCard {...elem} />
      </div>
    )}
  );
}

export default UsersList;
