import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Table } from "../components/Table";
import { Materia, MateriaPage } from "../models/Materia";
import { MateriaService } from "../services/MateriaService";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { Menu } from "../components/Menu";
import { Container } from "../components/Container";
import { useAuth } from "../hooks/useAuth";
import { Pagination } from "../components/Pagination";

const MateriaList = () => {
    const navigate = useNavigate()
    useAuth()

    const [materias, setMaterias] = useState<Array<Materia>>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsCount, setItemsCount] = useState(0)
    const getMateriaList = (page: number) => {
        new MateriaService().getMaterias(page)
            .then((response) => {
                setMaterias(response.results);
                setItemsCount(response.count);
            })
            .catch((error) => {
                console.error("Error al obtener las materias: ", error);
            });
    }
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        const pageNo = parseInt(page ? page.toString() : "1")
        setCurrentPage(pageNo)
        getMateriaList(pageNo)
    }, [])
    const deleteMateria = (id: string) => {
        const confirmation = window.confirm("¿Está seguro de que desea eliminar esta materia?");
        if (!confirmation) return;
        new MateriaService().deleteMateria(id)
            .then(() => {
                getMateriaList(currentPage)
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
                    <Pagination
                        itemCount={itemsCount}
                        page={currentPage}
                        pageSize={2}
                        onPageChange={(page) => {
                            setCurrentPage(page)
                            console.log(page)
                            getMateriaList(page)
                            const url = new URL(window.location);
                            url.searchParams.set('page', page.toString());
                            window.history.pushState({}, '', url);
                        }}
                    ></Pagination>
                </Card>
            </Container>
        </>
    );
}

export default MateriaList;