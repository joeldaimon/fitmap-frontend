import { useEffect, useState } from "react";
import { getUsuarios, Usuario } from "../api/usuarios";

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsuarios();
      console.log("Usuarios recibidos:", data);
      setUsuarios(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Usuarios</h1>
      <div className="space-y-6">
        {usuarios.map((r, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Usuario: {r.nombre}</h2>
            <p className="text-gray-600">Email: {r.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usuarios;