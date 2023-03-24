import React from "react";
import { useGetProjectsQuery } from "../../../feature/projects/projectsApi";
import Project from "./Project";
import Loading from "../../ui/Loading"
import Error from "../../ui/Error"

export default function Projects() {
  const { isLoading, isError, data: projects } = useGetProjectsQuery();
  let content = null
  if(isLoading){
    content = <Loading></Loading>
  }
  if(!isLoading && isError){
    content = <Error message="There was an error occur"></Error>
  }
  if(!isLoading && !isError && projects.length === 0){
    content = <Error message="project item not found"></Error>
  }
  if(!isLoading && !isError && projects.length > 0){
    content = projects.map(project => <Project key={project.id} project={project}></Project>)
  }
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">
        {/* <Project></Project> */}
        {content}
      </div>
    </div>
  );
}
