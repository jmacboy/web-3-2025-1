import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Table } from "../components/Table";
import { Materia } from "../models/Materia";
import { MateriaService } from "../services/MateriaService";
import { Button } from "../components/Button";

const MateriaList = () => {
    const [materias, setMaterias] = useState<Array<Materia>>([]);
    useEffect(() => {
        new MateriaService().getMaterias()
            .then((response) => {
                setMaterias(response);
            })
            .catch((error) => {
                console.error("Error al obtener las materias: ", error);
            });
    }, [])

    return (
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
                            <td className="text-center border-t-1 border-gray-300"><Button variant="primary" title="Editar"></Button></td>
                            <td className="px-3 py-3 text-center border-t-1 border-gray-300"><Button variant="danger" title="Eliminar"></Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default MateriaList;