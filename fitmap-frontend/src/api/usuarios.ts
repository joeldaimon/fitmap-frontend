import api from "./axios";
import { Role } from "./roles";

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

export const getUsuarios = async (): Promise<Usuario[]> => {
    const res = await api.get<Usuario[]>("/usuarios");
    return res.data;
};