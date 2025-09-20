import { useEffect, useState } from "react";
import { getEjercicios, Ejercicio } from "../api/ejercicios";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Ejercicios() {
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);

  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        const data = await getEjercicios();
        console.log("Datos recibidos del backend:", data);
        setEjercicios(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEjercicios();
  }, []);

  return (
   <div className="w-full justify-center p-6 bg-gray-100 min-h-screen">
      <Header />
      <Menu />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ejercicios.map((e, index) => (
          <div
            key={index}
            className="bg-brand-900 rounded-[5px] p-6 shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2">{e.nombre}</h2>
            <p className="text-gray-800 text-sm mb-1">{e.categoria}</p>
            <p className="text-gray-700 text-sm">Dificultad: {e.dificultad}</p>
          </div>
        ))}
      </div>
      <button>
        <p>Crear ejercicio</p>
      </button>
    </div>
  );
}

export default Ejercicios;
