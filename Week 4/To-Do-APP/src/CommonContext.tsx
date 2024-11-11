import React from "react";

interface Task {
  task: string;
  checked: boolean;
}

interface CommonContextType {
  taskList: Task[];
  deleteTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void;
  toggleTaskChecked: (index: number) => void;
}

// Default values for the context
const CommonContext = React.createContext<CommonContextType>({
  taskList: [],
  deleteTask: () => {},
  editTask: () => {},
  toggleTaskChecked: () => {},
});

export default CommonContext;