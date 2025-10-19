import { useEffect, useState } from "react";
import { getEjercicios, Ejercicio, EjercicioPage } from "../api/ejercicios";
import { getCategorias, Categoria } from "../api/categorias";
import Header from "../components/Header";

function Ejercicios() {
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [search, setSearch] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [categorias, setCategorias] = useState<string[]>([]);

  const fetchEjercicios = async (pageNumber: number, nombreFilter?: string, categoriaFilter?: string) => {
    try {
      const data: EjercicioPage = await getEjercicios(pageNumber, 5, "nombre", nombreFilter, categoriaFilter);
      if (pageNumber === 0) {
        setEjercicios(data.content);
      } else {
        setEjercicios(prev => [...prev, ...data.content]);
      }
      setPage(data.number);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchCategorias = async () => {
    try {
      const data = await getCategorias();
      setCategorias(data);
    } catch (err) {
      console.error(err);
    }
  };
    
  // Get ejercicios pageable
  useEffect(() => {
    fetchEjercicios(0, search, categoria);
    fetchCategorias();
  }, [search, categoria]);

  return (
   <div className="flex flex-col items-center w-full p-6 min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Ejercicios</h1>

       <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-[5px] min-w-1/2 border-1 hover:border hover:border-yellow-500"
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="bg-gray-700 rounded-[5px] min-w-1/2 border-1 hover:border hover:border-yellow-500">
          <option value="">Todas las categorías</option>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
          </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-2.5">
        {ejercicios.map((e, idx) => (
          <div key={idx} className="bg-yellow-500 rounded-[5px] p-6 shadow-lg flex flex-col items-center text-center transition hover:shadow-2xl  min-w-[200px]">
            <h2 className="text-2xl font-bold mb-2">{e.nombre}</h2>
            <p className="text-sm mb-1">Categoría: {e.categoria}</p>
            <p className="text-sm">Dificultad: {e.dificultad}</p>
          </div>
        ))}
      </div>
      {page + 1 < totalPages && (
        <button
          onClick={() => fetchEjercicios(page + 1, search, categoria)}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          Cargar más
        </button>
      )}
    </div>
  );
}

export default Ejercicios;
