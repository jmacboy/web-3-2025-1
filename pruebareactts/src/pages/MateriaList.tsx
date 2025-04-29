import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Table } from "../components/Table";
import { Materia } from "../models/Materia";
import { MateriaService } from "../services/MateriaService";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { Menu } from "../components/Menu";
import { Container } from "../components/Container";
import { useAuth } from "../hooks/useAuth";

const MateriaList = () => {
    const navigate = useNavigate()
    useAuth()

    const [materias, setMaterias] = useState<Array<Materia>>([]);
    const getMateriaList = () => {
        new MateriaService().getMaterias()
            .then((response) => {
                setMaterias(response);
            })
            .catch((error) => {
                console.error("Error al obtener las materias: ", error);
            });
    }
    useEffect(() => {
        getMateriaList()
    }, [])
    const deleteMateria = (id: string) => {
        const confirmation = window.confirm("¿Está seguro de que desea eliminar esta materia?");
        if (!confirmation) return;
        new MateriaService().deleteMateria(id)
            .then(() => {
                getMateriaList()
            })
            .catch((error) => {
                console.error("Error al eliminar la materia: ", error);
            });
    }
    return (
        <>
            <Menu />
            <Container>
                <Card title="Lista de Materias">
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Código</th>
                                <th>Créditos</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {materias.map((materia) => (
                                <tr key={materia.id}>
                                    <td className="text-center border-t-1 border-gray-300">{materia.id}</td>
                                    <td className="text-center border-t-1 border-gray-300">{materia.nombre}</td>
                                    <td className="text-center border-t-1 border-gray-300">{materia.codigo}</td>
                                    <td className="text-center border-t-1 border-gray-300">{materia.creditos}</td>
                                    <td className="text-center border-t-1 border-gray-300"><Button onClick={() => {
                                        navigate(URLS.MATERIAS.UPDATE(materia.id.toString()))
                                    }} variant="primary" title="Editar"></Button></td>
                                    <td className="px-3 py-3 text-center border-t-1 border-gray-300"><Button onClick={
                                        () => {
                                            deleteMateria(materia.id.toString())
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

export default MateriaList;