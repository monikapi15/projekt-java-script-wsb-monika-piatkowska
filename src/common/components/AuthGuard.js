import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

function AuthGuard({children}) {
  const authContext = useContext(AuthContext);
  return authContext.currentUser ? children : '';
}

export default AuthGuard;
