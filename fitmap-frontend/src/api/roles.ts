import api from "./axios";

export interface Role {
    nombre: string;
}

export const getRoles = async (): Promise<Role[]> => {
    const res = await api.get<Role[]>("/roles");
    return res.data;
};