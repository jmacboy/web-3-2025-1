import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Input"
import { FormField } from "../components/FormField"
import { Card } from '../components/Card';
import { Button } from "../components/Button";
import { MateriaService } from "../services/MateriaService";
import { Materia } from "../models/Materia";
import { useNavigate, useParams } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { useEffect } from "react";

type Inputs = {
    nombre: string
    codigo: string,
    creditos: number
}
export const MateriaForm = () => {
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
        const materia: Materia = {
            id: id ? id : "",
            nombre: data.nombre,
            codigo: data.codigo,
            creditos: data.creditos
        }
        if (id) {
            updateMateria(materia)
        } else {
            insertMateria(materia)
        }

    }
    const updateMateria = (materia: Materia) => {
        new MateriaService()
            .updateMateria(materia)
            .then(() => {
                navigate(URLS.HOME)
            })
            .catch((error) => {
                console.error("Error al actualizar la materia: ", error)
                alert("Error al actualizar materia, intente nuevamente");
            });
    }

    const insertMateria = (materia: Materia) => {
        new MateriaService()
            .insertMateria(materia)
            .then(() => {
                navigate(URLS.HOME)
            })
            .catch((error) => {
                console.error("Error al insertar la materia: ", error)
                alert("Error al insertar materia, intente nuevamente");
            });
    }

    const loadMateria = async () => {
        new MateriaService()
            .getMateria(id!)
            .then((response) => {
                reset({
                    nombre: response.nombre,
                    codigo: response.codigo,
                    creditos: response.creditos
                })
            });
    }
    useEffect(() => {
        if (!id) {
            return;
        }
        loadMateria();

    }, [id])

    return (
        <div>
            <Card title="Formulario Materia" className="mx-5 my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <label htmlFor="nombre">Nombre:</label>
                        <Input id="nombre" {...register("nombre", { required: true })} />
                        {errors.nombre && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="codigo">Código:</label>
                        <Input id="codigo" {...register("codigo", { required: true })} />
                        {errors.codigo && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="creditos">Créditos:</label>
                        <Input id="creditos" type="number" {...register("creditos", { required: true })} />
                        {errors.creditos && <span>Este campo es requerido</span>}
                    </FormField>
                    <Button type="submit" title="Guardar" />
                </form>
            </Card>
        </div>
    );
}
