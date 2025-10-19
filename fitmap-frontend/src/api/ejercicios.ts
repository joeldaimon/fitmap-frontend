import api from "./axios";

export interface Ejercicio {
    nombre: string;
    categoria: string;
    dificultad: number;
}

export interface EjercicioPage {
  content: Ejercicio[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  last: boolean;
}

export const getEjercicios = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "nombre",
  nombre?: string,
  categoria?: string
): Promise<EjercicioPage> => {
  let query = `/ejercicios?page=${page}&size=${size}&sortBy=${sortBy}`;
  if (nombre) query += `&nombre=${encodeURIComponent(nombre)}`;
  if (categoria) query += `&categoria=${encodeURIComponent(categoria)}`;
  const res = await api.get<EjercicioPage>(query);
  return res.data;
};;