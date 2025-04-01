import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Table } from "../components/Table";
import { Materia } from "../models/Materia";
import { MateriaService } from "../services/MateriaService";

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
                    </tr>
                </thead>
                <tbody>
                    {materias.map((materia) => (
                        <tr key={materia.id}>
                            <td className="text-center">{materia.id}</td>
                            <td className="text-center">{materia.nombre}</td>
                            <td className="text-center">{materia.codigo}</td>
                            <td className="text-center">{materia.creditos}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default MateriaList;