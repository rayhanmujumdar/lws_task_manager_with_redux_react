import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addProjectsName,
  removeProjectsName,
} from "../../../feature/filter/filterSlice";

export default function Project({ project }) {
  const { projectName, colorClass } = project || {};
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (check) {
      dispatch(addProjectsName(projectName));
    } else {
      dispatch(removeProjectsName(projectName));
    }
  }, [check]);
  return (
    <>
      <div className="checkbox-container">
        <input
          onChange={(e) => setCheck(e.target.checked)}
          checked={check}
          type="checkbox"
          className={colorClass}
        />
        <p className="label">{projectName}</p>
      </div>
    </>
  );
}
