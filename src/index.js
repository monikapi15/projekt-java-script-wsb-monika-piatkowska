import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./routes/login/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "react-pure-modal/dist/react-pure-modal.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./assets/styles/index.css";
import Courses from "./routes/courses/Courses";
import Course from "./routes/course/Course";
import Home from "./routes/Home/Home";
import Pay from "./routes/pay/Pay";
import Users from "./routes/users/Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="courses" element={<Courses />} />
        <Route path="users" element={<Users />} />
        <Route path="pay" element={<Pay />} />
        <Route path="courses/:id" element={<Course />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
