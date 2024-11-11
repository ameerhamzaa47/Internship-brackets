import { FC, useState } from "react";
import CommonContext from "./CommonContext";
import Table from "./Table";

const ToDoApp: FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<{ task: string; checked: boolean }[]>([]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  // Add a new task on click
  const getTask = (): void => {
    if (task.trim()) {
      setTaskList([...taskList, { task, checked: false }]);
      setTask("");
    }
  };

  // Add a new task on enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getTask();
    }
  };

  // Delete task
  const deleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  // Edit task
  const editTask = (index: number, newTask: string) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].task = newTask; // Update the task text
    setTaskList(updatedTaskList);
  };

  // Toggle task checked state
  const toggleTaskChecked = (index: number) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].checked = !updatedTaskList[index].checked;
    setTaskList(updatedTaskList);
  };

  return (
    <CommonContext.Provider value={{ taskList, deleteTask, editTask, toggleTaskChecked }}>
      <h1 className="text-orange-500 text-center text-4xl my-5 font-bold">To-Do-APP</h1>
      <div className="flex flex-col">
        <input
          type="text"
          value={task}
          className="w-96 mx-auto my-2 h-10 rounded-md p-4 bg-orange-100 focus:bg-white focus:outline-orange-400"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter Task Here..."
        />
        <button onClick={getTask} className="bg-orange-500 w-96 mx-auto hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
        <Table />
      </div>
    </CommonContext.Provider>
  );
};

export default ToDoApp;