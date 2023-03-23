import React from 'react'
import AddTaskButton from './AddTaskButton'
import TaskItems from "./TaskItems"

export default function TaskContainer() {
  return (
    <div class="lg:pl-[16rem] 2xl:pl-[23rem]">
      <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <AddTaskButton></AddTaskButton>
        <TaskItems></TaskItems>
      </main>
    </div>
  )
}
