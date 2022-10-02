import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmite = (e) => {
    e.preventDefault();
    //console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form
        onSubmit={handleSubmite}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3 text-center ">
          Crea tu Tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-red-600 px-3 py-1 text-white  hover:bg-red-500">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
