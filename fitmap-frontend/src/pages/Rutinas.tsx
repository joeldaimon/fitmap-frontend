import { useEffect, useState } from "react";
import { getRutinas, Rutina } from "../api/rutinas";
import Header from "../components/Header";
import { FaEdit, FaTrash } from "react-icons/fa";

function Rutinas() {
  const [rutinas, setRutinas] = useState<Rutina[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRutinas();
      console.log("Rutinas recibidas:", data);
      setRutinas(data);
    };
    fetchData();
  }, []);
  
  const handleEdit = (nombre: string) => {
    console.log("Editar Rutina con nombre:", nombre);
  };

  const handleDelete = (nombre: string) => {
    console.log("Editar Rutina con nombre:", nombre);
  };

  return (
    <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Rutinas</h1>
      <div className="space-y-6">
        {rutinas.map((r, idx) => (
          <div key={idx} className="my-5 bg-yellow-500 rounded-[5px] p-6 shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl bg-[#646cff] min-w-[200px]"
          >
            <h2 className="text-xl font-semibold">{r.nombre}</h2>
            <p className="text-gray-600">Usuario: {r.usuarioNombre}</p>
            <h3 className="font-bold">Ejercicios:</h3>
            <ul className="list-disc pl-6">
              {r.ejercicios.map((e) => (
                <li>
                  {e.nombre} ({e.categoria}) – Dificultad {e.dificultad}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <FaEdit className="cursor-pointer hover:text-gray-700" onClick={() => handleEdit(r.nombre)} />
              <FaTrash className="cursor-pointer hover:text-gray-700" onClick={() => handleDelete(r.nombre)} />
            </div>
          </div>
        ))}
      </div>
      <button type="submit" className="w-[36%] bg-gray-300 hover:bg-gray-700 text-white font-bold py-2 rounded">
          Crear rutina
        </button>
    </div>
  );
}

export default Rutinas;