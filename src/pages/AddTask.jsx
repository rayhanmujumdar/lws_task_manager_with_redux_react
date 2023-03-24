import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { teamSlice } from "../feature/team/teamSlice";
import { useAddTaskMutation } from "../feature/task/taskSlice";
import { projectsApi } from "../feature/projects/projectsApi";
import { useNavigate } from "react-router";
import Error from "../component/ui/Error";

export default function AddTask() {
  const [addTask, { isLoading, isError, isSuccess }] = useAddTaskMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [team, setTeam] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [deadline, setDeadline] = useState("");

  const handleTeamMember = async (e) => {
    const { data } = await dispatch(
      teamSlice.endpoints.getTeam.initiate(e.target.value)
    );
    if (data?.length > 0) {
      setTeam(data[0]);
    }
  };
  const handleProjectName = async (e) => {
    const { data } = await dispatch(
      projectsApi.endpoints.getProject.initiate(e.target.value)
    );
    if (data?.length > 0) {
      setProjectName(data[0]);
    }
  };
  useEffect(() => { 
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const createTask = {
      taskName,
      teamMember: team,
      project: projectName,
      deadline,
    };
    if (team?.id && projectName?.id) {
      addTask(createTask);
    }
  };
  
  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-taskName">Task Name</label>
              <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
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
                onChange={handleTeamMember}
                name="teamMember"
                id="lws-teamMember"
                defaultValue={""}
                required
              >
                <option defaultValue="" hidden>
                  Select Job
                </option>
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
                onChange={handleProjectName}
                id="lws-projectName"
                name="projectName"
                required
                defaultChecked=""
              >
                <option defaultValue="" hidden>
                  Select Project
                </option>
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
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                type="date"
                name="deadline"
                id="lws-deadline"
                required
              />
            </div>

            <div className="text-right">
              <button disabled={isLoading} type="submit" className="lws-submit">
                Save
              </button>
            </div>
            {isError && <Error message="There was an error"></Error>}
          </form>
        </div>
      </main>
    </div>
  );
}
