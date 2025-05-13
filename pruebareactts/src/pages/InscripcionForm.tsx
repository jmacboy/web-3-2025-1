import { useNavigate, useParams } from "react-router";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Menu } from "../components/Menu";
import { useAuth } from "../hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "../components/FormField";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { AlumnoService } from "../services/AlumnoService";
import { Alumno } from "../models/Alumno";
import { Materia } from "../models/Materia";
import { MateriaService } from "../services/MateriaService";
type Inputs = {
    alumno_id: string
    materias_id: number[]
}
export const InscripcionForm = () => {
    useAuth()
    const { id } = useParams<{ id: string }>();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const [alumnos, setAlumnos] = useState<Array<Alumno>>([])
    const [materias, setMaterias] = useState<Array<Materia>>([])

    useEffect(() => {
        fetchAlumnosList()
        fetchMateriasList()
    }, [])
    const fetchMateriasList = () => {
        new MateriaService()
            .getMaterias()
            .then((response) => {
                setMaterias(response)

                console.log("Materias list", response)
            })
            .catch((error) => {
                console.error("Error al obtener la lista de materias: ", error)
                alert("Error al obtener la lista de materias, intente nuevamente");
            });
    }
    const fetchAlumnosList = () => {
        new AlumnoService()
            .getAlumnos()
            .then((response) => {
                setAlumnos(response)

                console.log("Alumnos list", response)
            })
            .catch((error) => {
                console.error("Error al obtener la lista de alumnos: ", error)
                alert("Error al obtener la lista de alumnos, intente nuevamente");
            });
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        //TODO: Enviar los datos de la materia
    }
    return (
        <>
            <Menu />

            <Container>
                <Card title="Formulario de Inscripción" className="mx-5 my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormField>
                            <label htmlFor="alumno_id">Alumno:</label>
                            <Select id="alumno_id" {...register("alumno_id", { required: true })} >
                                <option value="">Seleccione un alumno</option>
                                {alumnos.map((alumno) => (
                                    <option key={alumno.id} value={alumno.id}>
                                        {alumno.nombres} {alumno.apellidos}
                                    </option>
                                ))}
                            </Select>
                            {errors.alumno_id && <span>Este campo es requerido</span>}
                        </FormField>
                        <FormField>
                            <label htmlFor="materias_id">Materias:</label>
                            {materias.map((materia) => (
                                <label key={materia.id} className="block">
                                    <input
                                        type="checkbox"
                                        value={materia.id}
                                        {...register("materias_id")}
                                    />&nbsp;
                                    {materia.codigo} - {materia.nombre} - {materia.creditos} Créditos
                                </label>
                            ))}
                            {errors.materias_id && <span>Este campo es requerido</span>}
                        </FormField>

                        <Button type="submit" title="Guardar" />
                    </form>
                </Card>
            </Container>
        </>
    );
}