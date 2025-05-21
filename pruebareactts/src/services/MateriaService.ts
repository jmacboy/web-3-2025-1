import { Materia, MateriaPage } from "../models/Materia"
import apiClient from "./interceptors"

export class MateriaService {
    getMaterias(page: number): Promise<MateriaPage> {
        return new Promise<MateriaPage>((resolve, reject) => {
            apiClient.get("materias/?page=" + page + "&ordering=nombre")
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al obtener las materias: " + error.message))
                })
        })
    }
    getMateria(id: string): Promise<Materia> {
        return new Promise<Materia>((resolve, reject) => {
            apiClient.get("materias/" + id + "/")
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al obtener la materia: " + error.message))
                })
        })
    }

    insertMateria(materia: Materia): Promise<Materia> {
        return new Promise<Materia>((resolve, reject) => {
            apiClient.post("materias/", materia)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al insertar la materia: " + error.message))
                })
        })
    }
    updateMateria(materia: Materia): Promise<Materia> {
        return new Promise<Materia>((resolve, reject) => {
            apiClient.put("materias/" + materia.id + "/", materia)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al insertar la materia: " + error.message))
                })
        })
    }
    deleteMateria(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            apiClient.delete("materias/" + id + '/')
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(new Error("Error al eliminar la materia: " + error.message))
                })
        })
    }
}