import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Input"
import { FormField } from "../components/FormField"
import { Card } from '../components/Card';
import { Button } from "../components/Button";
import { AlumnoService } from "../services/AlumnoService";
import { Alumno } from "../models/Alumno";
import { useNavigate, useParams } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { useEffect } from "react";

type Inputs = {
    nombres: string
    apellidos: string,
    edad: number,
    fecha_nacimiento: string,
    registro: string
}
export const AlumnoForm = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        const alumno: Alumno = {
            id: id ? id : "",
            nombres: data.nombres,
            apellidos: data.apellidos,
            edad: data.edad,
            fecha_nacimiento: data.fecha_nacimiento,
            registro: data.registro
        }
        if (id) {
            updateAlumno(alumno)
        } else {
            insertAlumno(alumno)
        }

    }
    const updateAlumno = (alumno: Alumno) => {
        new AlumnoService()
            .updateAlumno(alumno)
            .then(() => {
                navigate(URLS.ALUMNOS.LIST)
            })
            .catch((error) => {
                console.error("Error al actualizar el alumno: ", error)
                alert("Error al actualizar alumno, intente nuevamente");
            });
    }

    const insertAlumno = (alumno: Alumno) => {
        new AlumnoService()
            .insertAlumno(alumno)
            .then(() => {
                navigate(URLS.ALUMNOS.LIST)
            })
            .catch((error) => {
                console.error("Error al insertar la alumno: ", error)
                alert("Error al insertar alumno, intente nuevamente");
            });
    }

    const loadAlumno = async () => {
        new AlumnoService()
            .getAlumno(id!)
            .then((response) => {
                reset({
                    nombres: response.nombres,
                    apellidos: response.apellidos,
                    edad: response.edad,
                    fecha_nacimiento: response.fecha_nacimiento,
                    registro: response.registro
                })
            });
    }
    useEffect(() => {
        if (!id) {
            return;
        }
        loadAlumno();

    }, [id])

    return (
        <div>
            <Card title="Formulario Alumno" className="mx-5 my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <label htmlFor="nombres">Nombres:</label>
                        <Input id="nombres" {...register("nombres", { required: true })} />
                        {errors.nombres && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="apellidos">Apellidos:</label>
                        <Input id="apellidos" {...register("apellidos", { required: true })} />
                        {errors.apellidos && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="edad">Edad:</label>
                        <Input id="edad" type="number" {...register("edad", { required: true })} />
                        {errors.edad && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                        <Input id="fecha_nacimiento" type="date" {...register("fecha_nacimiento", { required: true })} />
                        {errors.fecha_nacimiento && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="registro">Registro:</label>
                        <Input id="registro" type="text" {...register("registro", { required: true })} />
                        {errors.registro && <span>Este campo es requerido</span>}
                    </FormField>
                    <Button type="submit" title="Guardar" />
                </form>
            </Card>
        </div>
    );
}
