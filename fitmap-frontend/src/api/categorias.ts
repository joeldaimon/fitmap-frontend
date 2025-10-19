import api from "./axios";

export interface Categoria {
    nombre: string;
}

export const getCategorias = async (): Promise<string[]> => {
  const res = await api.get<string[]>("/categorias");
  return res.data.map((c: any) => c.nombre);
};