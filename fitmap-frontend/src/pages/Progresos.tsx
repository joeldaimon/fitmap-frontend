import { useEffect, useState } from "react";
import { getProgresos, Progreso } from "../api/progresos";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Progresos() {
  const [progresos, setProgresos] = useState<Progreso[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgresos();
      console.log("Progresos recibidos:", data);
      setProgresos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <Header />
      <Menu />
      <h1 className="text-3xl font-bold mb-6">Progresos</h1>
      <div className="space-y-6">
        {progresos.map((r, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Usuario: {r.usuarioNombre}</h2>
            <p className="text-gray-600">Ejercicio: {r.ejercicioNombre}</p>
            <p className="text-gray-600">Repeticiones: {r.repeticiones}</p>
            <p className="text-gray-600">Peso: {r.peso}</p>
            <p className="text-gray-600">
                Fecha: {new Date(r.fecha).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <button>
        <p>Crear progreso</p>
      </button>
    </div>
  );
}

export default Progresos;