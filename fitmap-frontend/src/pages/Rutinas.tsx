import { useEffect, useState } from "react";
import { getRutinas, Rutina } from "../api/rutinas";
import Header from "../components/Header";
import Menu from "../components/Menu";

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

  return (
    <div className="p-6">
      <Header />
      <Menu />
      <h1 className="text-3xl font-bold mb-6">Rutinas</h1>
      <div className="space-y-6">
        {rutinas.map((r, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
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
          </div>
        ))}
      </div>
      <button>
        <p>Crear rutina</p>
      </button>
    </div>
  );
}

export default Rutinas;