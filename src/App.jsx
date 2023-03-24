import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Nav from "./component/navbar/Nav";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add-task" element={<AddTask></AddTask>}></Route>
        <Route path="/edit-task/:taskId" element={<EditTask></EditTask>}></Route>
      </Routes>
    </>
  );
}

export default App;
