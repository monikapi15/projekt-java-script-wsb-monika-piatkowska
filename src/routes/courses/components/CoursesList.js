import CoursesCard from "./CoursesCard";
import {useContext, useState} from "react";
import {DataContext} from "../../../common/contexts/DataContext";

function CoursesList() {
  const dataContext = useContext(DataContext);

  return dataContext?.courses.map((elem, key) => {
      return (
        <div key={key} className="col-lg-4">
          <CoursesCard hideDetail={true} {...elem} />
        </div>
      )}
  );
}

export default CoursesList;
