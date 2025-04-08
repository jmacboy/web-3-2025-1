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
}