import api from "./axios";

export interface Categoria {
    nombre: string;
}

export const getCategorias = async (): Promise<Categoria[]> => {
    const res = await api.get<Categoria[]>("/categorias");
    return res.data;
};