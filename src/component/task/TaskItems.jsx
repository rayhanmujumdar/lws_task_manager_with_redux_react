import React from "react";
import Task from "./Task";
import Loading from "../ui/Loading"
import Error from "../ui/Error"
import { useGetTasksQuery } from "../../feature/task/taskSlice";

export default function TaskItems() {
  const { isLoading, isError, data: tasks } = useGetTasksQuery();
  let content = null;
  if (isLoading) {
    content = <Loading></Loading>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occur"></Error>;
  }
  if (!isLoading && !isError && tasks.length === 0) {
    content = <Error message="project item not found"></Error>;
  }
  if (!isLoading && !isError && tasks.length > 0) {
    content = tasks.map((task) => (
      <Task key={task.id} task={task}></Task>
    ));
  }
  return (
    <div className="lws-task-list">
      {content}
    </div>
  );
}
