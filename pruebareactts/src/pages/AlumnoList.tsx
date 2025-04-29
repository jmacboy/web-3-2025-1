import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { AlumnoService } from "../services/AlumnoService";
import { Alumno } from "../models/Alumno";
import { Menu } from "../components/Menu";
import { Container } from "../components/Container";
import { useAuth } from "../hooks/useAuth";

const AlumnoList = () => {
    const navigate = useNavigate()
    useAuth()

    const [alumnos, setAlumnos] = useState<Array<Alumno>>([]);
    const getAlumnoList = () => {
        new AlumnoService().getAlumnos()
            .then((response) => {
                setAlumnos(response);
            })
            .catch((error) => {
                console.error("Error al obtener las alumnos: ", error);
            });
    }
    useEffect(() => {
        getAlumnoList()
    }, [])
    const deleteAlumno = (id: string) => {
        const confirmation = window.confirm("¿Está seguro de que desea eliminar esta alumno?");
        if (!confirmation) return;
        new AlumnoService().deleteAlumno(id)
            .then(() => {
                getAlumnoList()
            })
            .catch((error) => {
                console.error("Error al eliminar la alumno: ", error);
            });
    }
    return (
        <>
            <Menu />
            <Container>
                <Card title="Lista de Alumnos">
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Edad</th>
                                <th>Fecha de nacimiento</th>
                                <th>Registro</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr key={alumno.id}>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.id}</td>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.nombres}</td>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.apellidos}</td>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.edad}</td>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.fecha_nacimiento}</td>
                                    <td className="text-center border-t-1 border-gray-300">{alumno.registro}</td>
                                    <td className="text-center border-t-1 border-gray-300"><Button onClick={() => {
                                        navigate(URLS.ALUMNOS.UPDATE(alumno.id.toString()))
                                    }} variant="primary" title="Editar"></Button></td>
                                    <td className="px-3 py-3 text-center border-t-1 border-gray-300"><Button onClick={
                                        () => {
                                            deleteAlumno(alumno.id.toString())
                                        }
                                    } variant="danger" title="Eliminar"></Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>

    );
}

export default AlumnoList;