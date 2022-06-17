import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

function RolesGuard({roles, children}) {
  const authContext = useContext(AuthContext);
  return !(roles.find(role => role === authContext?.currentUser?.role)) ? '' : children
}

export default RolesGuard;
