import React from "react";
import Nav from "../component/navbar/Nav";
import LayOut from "../component/layout/LayOut";
import Sidebar from "../component/sidebar/Sidebar";
import TaskContainer from "../component/task/TaskContainer";

export default function Home() {
  return (
    <>
      <LayOut>
        <Sidebar></Sidebar>
        <TaskContainer></TaskContainer>
      </LayOut>
    </>
  );
}
