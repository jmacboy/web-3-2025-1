import axios from "axios"
import { Materia } from "../models/Materia"

export class MateriaService {
    getMaterias(): Promise<Array<Materia>> {
        return new Promise<Array<Materia>>((resolve, reject) => {
            axios.get("http://localhost:8000/universidad/materias/")
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
            axios.get("http://localhost:8000/universidad/materias/" + id)
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
            axios.post("http://localhost:8000/universidad/materias/", materia)
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
            axios.put("http://localhost:8000/universidad/materias/" + materia.id + "/", materia)
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
            axios.delete("http://localhost:8000/universidad/materias/" + id + '/')
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(new Error("Error al eliminar la materia: " + error.message))
                })
        })
    }
}