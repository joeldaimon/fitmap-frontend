import { useEffect, useState } from "react";
import { getEjercicios, Ejercicio } from "../api/ejercicios";
import { getCategorias, Categoria } from "../api/categorias";
import Header from "../components/Header";
import Menu from "../components/Menu";

function Ejercicios() {
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [search, setSearch] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");

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

  const ejerciciosFiltrados = ejercicios
    .filter((e) =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    )
    .filter((e) => (categoria ? e.categoria === categoria : true));

  return (
   <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <Header />
      <Menu />
      <h1 className="text-3xl font-bold mb-6">Ejercicios</h1>

       <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-[5px] min-w-1/2 border-1 hover:border hover:border-[#646cff]"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="rounded-[5px] min-w-1/2 border-1 hover:border hover:border-[#646cff]">
          <option value="">Todas las categorías</option>
          <option value="Pierna">Pierna</option>
          <option value="Espalda">Espalda</option>
          <option value="Pecho">Pecho</option>
          <option value="Hombro">Hombro</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5">
        {ejerciciosFiltrados.map((e, idx) => (
          <div key={idx} className="bg-brand-900 rounded-[5px] p-6 shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl bg-[#646cff] min-w-[200px]">
            <h2 className="text-2xl font-bold mb-2">{e.nombre}</h2>
            <p className="text-sm mb-1">Categoría: {e.categoria}</p>
            <p className="text-sm">Dificultad: {e.dificultad}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ejercicios;
