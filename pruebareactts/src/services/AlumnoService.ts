import axios from "axios"
import { Alumno } from "../models/Alumno"
import apiClient from "./interceptors"

export class AlumnoService {
    getAlumnos(): Promise<Array<Alumno>> {
        return new Promise<Array<Alumno>>((resolve, reject) => {
            apiClient.get("alumnos/")
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al obtener las alumnos: " + error.message))
                })
        })
    }
    getAlumno(id: string): Promise<Alumno> {
        return new Promise<Alumno>((resolve, reject) => {
            apiClient.get("alumnos/" + id)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al obtener la alumno: " + error.message))
                })
        })
    }

    insertAlumno(alumno: Alumno): Promise<Alumno> {
        return new Promise<Alumno>((resolve, reject) => {
            apiClient.post("alumnos/", alumno)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al insertar la alumno: " + error.message))
                })
        })
    }
    updateAlumno(alumno: Alumno): Promise<Alumno> {
        return new Promise<Alumno>((resolve, reject) => {
            apiClient.put("alumnos/" + alumno.id + "/", alumno)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al insertar la alumno: " + error.message))
                })
        })
    }
    deleteAlumno(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            apiClient.delete("alumnos/" + id + '/')
                .then(() => {
                    resolve()
                })
                .catch((error) => {
                    reject(new Error("Error al eliminar la alumno: " + error.message))
                })
        })
    }
}