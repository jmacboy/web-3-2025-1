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
            apiClient.get("alumnos/" + id + "/")
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
            const formData = new FormData()
            formData.append("nombres", alumno.nombres)
            formData.append("apellidos", alumno.apellidos)
            formData.append("edad", alumno.edad.toString())
            formData.append("fecha_nacimiento", alumno.fecha_nacimiento)
            formData.append("registro", alumno.registro)
            const file = alumno.profile_picture[0]
            formData.append("profile_picture", file)
            apiClient.post("alumnos/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error("Error al insertar el alumno: " + error.message))
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