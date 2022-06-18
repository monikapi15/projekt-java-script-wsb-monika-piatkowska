import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router";

function PayGuard({ children }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const limit = localStorage.getItem("access");

    if (
      authContext?.currentUser?.role === "user" &&
      (!limit || (limit && parseInt(limit, 10) < now.getTime()))
    ) {
      navigate("/pay");
    }
  }, []);

  return children;
}

export default PayGuard;
