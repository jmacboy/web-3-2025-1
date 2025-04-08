import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Input"
import { FormField } from "../components/FormField"
import { Card } from '../components/Card';
import { Button } from "../components/Button";
import { MateriaService } from "../services/MateriaService";
import { Materia } from "../models/Materia";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";

type Inputs = {
    nombre: string
    codigo: string,
    creditos: number
}
export const MateriaForm = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        const materia: Materia = {
            id: 0,
            nombre: data.nombre,
            codigo: data.codigo,
            creditos: data.creditos
        }
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