import api from "./axios";
import { Ejercicio } from "./ejercicios";

export interface Rutina {
    nombre: string;
    usuarioNombre: string;
    ejercicios: Ejercicio[];
}

export const getRutinas = async (): Promise<Rutina[]> => {
    const res = await api.get<Rutina[]>("/rutinas");
    return res.data;
};