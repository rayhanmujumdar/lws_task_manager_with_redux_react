import React from 'react'
import AddTaskButton from './AddTaskButton'
import TaskItems from "./TaskItems"

export default function TaskContainer() {
  return (
    <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <AddTaskButton></AddTaskButton>
        <TaskItems></TaskItems>
      </main>
    </div>
  )
}
