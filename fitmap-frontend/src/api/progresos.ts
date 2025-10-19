import api from "./axios";

export interface Progreso {
    usuarioNombre: string;
    ejercicioNombre: string;
    repeticiones: number;
    peso: number;
    fecha: string;
}

export const getProgresos = async (): Promise<Progreso[]> => {
    const res = await api.get<Progreso[]>("/progresos");
    return res.data;
};