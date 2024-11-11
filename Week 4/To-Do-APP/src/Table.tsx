import { useContext } from "react";
import CommonContext from "./CommonContext";

function Table() {
  const { taskList, deleteTask, editTask, toggleTaskChecked } = useContext(CommonContext);

  return (
    <>
      <table className="mx-auto my-10 border-separate border-spacing-y-3">
        {taskList.map((item, index) => (
          <tbody key={index}>
            <tr className={`${item.checked ? 'bg-red-300' : 'bg-blue-200'}`}>
              <td className="p-2 min-w-96 max-w-96">
                <input type="checkbox" onClick={() => toggleTaskChecked(index)} className={`mx-2 my-4`} checked={item.checked}/>
                <span className={`${item.checked ? 'line-through' : ''}`}>{item.task}</span>
              </td>
              <td className="px-3 py-2">
                <i className="fa-solid fa-pen-to-square mx-3 text-green-600 cursor-pointer"
                  onClick={() => {
                    const newTask = prompt("Edit Task:", item.task);
                    if (newTask) {
                      editTask(index, newTask);
                    }
                  }}></i>
                <i className="fa-solid fa-trash text-red-600 cursor-pointer" onClick={() => deleteTask(index)}></i>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Table;