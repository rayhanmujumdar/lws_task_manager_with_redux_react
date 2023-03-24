import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { projectsApi } from "../feature/projects/projectsApi";
import { useGetTaskQuery } from "../feature/task/taskSlice";
import { useEditTaskMutation } from "../feature/task/taskSlice";
import { teamSlice } from "../feature/team/teamSlice";
import Error from "../component/ui/Error";
export default function EditTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const {
    data: task,
    isSuccess,
    isError: isTaskError,
  } = useGetTaskQuery(taskId);
  const dispatch = useDispatch();
  const [editTask, { isSuccess: editSuccess, isError: isEditError }] =
    useEditTaskMutation();
  const { id, taskName, teamMember, project, deadline } = task || {};
  const [name, setName] = useState("");
  const [teamMemberName, setTeamMemberName] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setName(taskName);
      setTeamMemberName(teamMember);
      setProjectName(project);
      setDate(deadline);
    } else if (isTaskError) {
      setError("Something was wrong");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (editSuccess) {
      navigate("/");
    } else if (isEditError) {
      setError("Something was wrong");
    }
  }, [editSuccess, navigate]);

  // handle team member or project
  const handleTeamMember = async (e) => {
    const { data } = await dispatch(
      teamSlice.endpoints.getTeam.initiate(e.target.value)
    );
    if (data.length > 0) {
      setTeamMemberName(data[0]);
    }
  };
  const handleProjectName = async (e) => {
    const { data } = await dispatch(
      projectsApi.endpoints.getProject.initiate(e.target.value)
    );
    if (data.length > 0) {
      setProjectName(data[0]);
    }
  };
  console.log({ teamMemberName, projectName });
  // handleSubmit for edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task?.id) {
      editTask({
        id,
        data: {
          taskName: name,
          teamMember: teamMemberName,
          project: projectName,
          deadline,
        },
      });
    } else {
      setError("Something was wrong");
    }
  };
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Edit Task
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-taskName">Task Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
              />
            </div>

            <div className="fieldContainer">
              <label>Assign To</label>
              <select
                value={teamMemberName?.name}
                onChange={handleTeamMember}
                name="teamMember"
                id="lws-teamMember"
                required
              >
                <option>Sumit Saha</option>
                <option>Saad Hasan</option>
                <option>Akash Ahmed</option>
                <option>Md Salahuddin</option>
                <option>Riyadh Hassan</option>
                <option>Ferdous Hassan</option>
                <option>Arif Almas</option>
              </select>
            </div>
            <div className="fieldContainer">
              <label htmlFor="lws-projectName">Project Name</label>
              <select
                value={projectName?.projectName}
                onChange={handleProjectName}
                id="lws-projectName"
                name="projectName"
                required
              >
                <option>Scoreboard</option>
                <option>Flight Booking</option>
                <option>Product Cart</option>
                <option>Book Store</option>
                <option>Blog Application</option>
                <option>Job Finder</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-deadline">Deadline</label>
              <input
                value={date}
                onChange={handleProjectName}
                type="date"
                name="deadline"
                id="lws-deadline"
                required
              />
            </div>

            <div className="text-right">
              <button type="submit" className="lws-submit">
                Save
              </button>
            </div>
            {isEditError && isTaskError && <Error message={error}></Error>}
          </form>
        </div>
      </main>
    </div>
  );
}
