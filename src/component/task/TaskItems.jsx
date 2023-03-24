import React from "react";
import Task from "./Task";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import { useGetTasksQuery } from "../../feature/task/taskSlice";
import { useSelector } from "react-redux";

export default function TaskItems() {
  const { isLoading, isError, data: tasks } = useGetTasksQuery();
  const { searchText,projects } = useSelector((state) => state.filter);
  let content = null;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occur"></Error>;
  }
  if (!isLoading && !isError && tasks.length > 0) {
    content = tasks
    .filter((task) => projects.includes(task.project.projectName))
    .filter((task) =>
    task.taskName.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((task) => <Task key={task.id} task={task}></Task>);
  }
  if (!isLoading && !isError && content?.length === 0) {
    content = <Error message="project item not found"></Error>;
  }
  return <div className="lws-task-list">{content}</div>;
}
