import api from "./axios";

export interface Ejercicio {
    nombre: string;
    categoria: string;
    dificultad: number;
}

export const getEjercicios = async (): Promise<Ejercicio[]> => {
    const res = await api.get<Ejercicio[]>("/ejercicios");
    return res.data;
};