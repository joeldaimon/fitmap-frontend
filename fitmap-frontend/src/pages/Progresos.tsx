import { useEffect, useState } from "react";
import { getProgresos, Progreso } from "../api/progresos";
import Header from "../components/Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Progresos() {
  const [progresos, setProgresos] = useState<Progreso[]>([]);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState<string>("");


  useEffect(() => {
    const fetchData = async () => {
      const data = await getProgresos();
      console.log("Progresos recibidos:", data);
      setProgresos(data);

      if (data.length > 0 && !ejercicioSeleccionado) {
        setEjercicioSeleccionado(data[0].ejercicioNombre);
      }
    };
    fetchData();
  }, []);

  const ejercicios = Array.from(
    new Set(progresos.map((p) => p.ejercicioNombre))
  );

  const data = progresos
    .filter((p) => p.ejercicioNombre === ejercicioSeleccionado)
    .map((p) => ({
      fecha: new Date(p.fecha).toLocaleDateString(),
      peso: p.peso,
      repeticiones: p.repeticiones,
    }));

  return (
    <div className="flex flex-col w-full p-6 min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard de Progresos</h1>

      <div className="mb-6">
        <label className="mr-2 font-semibold">Selecciona ejercicio:</label>
        <select
          value={ejercicioSeleccionado}
          onChange={(e) => setEjercicioSeleccionado(e.target.value)}
          className="bg-gray-700 rounded-[5px] border-1 hover:border hover:border-[#646cff]"
        >
          <option value="">-- Selecciona --</option>
          {ejercicios.map((ej, idx) => (
            <option key={idx} value={ej}>
              {ej}
            </option>
          ))}
        </select>
      </div>

      {ejercicioSeleccionado && data.length > 0 ? (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Evolución de {ejercicioSeleccionado}
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="peso" stroke="#8884d8" name="Peso (kg)" />
              <Line
                type="monotone"
                dataKey="repeticiones"
                stroke="#82ca9d"
                name="Repeticiones"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-600">
          {ejercicioSeleccionado
            ? "No hay progresos aún para este ejercicio."
            : "Selecciona un ejercicio para ver su evolución."}
        </p>
      )}
    </div>
  );
}

export default Progresos;