import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Input"
import { FormField } from "../components/FormField"
import { Card } from '../components/Card';
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { LoginRequest } from "../models/dto/LoginRequest";
import { AuthService } from "../services/AuthService";
import { RegisterRequest } from "../models/dto/RegisterRequest";

type Inputs = {
    email: string
    password: string
}
export const RegisterForm = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        const login: RegisterRequest = {
            email: data.email,
            password: data.password,
        }
        new AuthService()
            .register(login.email, login.password)
            .then((response) => {
                console.log("Register successful", response)
                navigate(URLS.LOGIN)
            })
    }

    return (
        <div>
            <Card title="Registro" className="mx-5 my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField>
                        <label htmlFor="email">Email:</label>
                        <Input type="text" id="email" {...register("email", { required: true })} />
                        {errors.email && <span>Este campo es requerido</span>}
                    </FormField>
                    <FormField>
                        <label htmlFor="password">Contraseña:</label>
                        <Input type="password" id="password" {...register("password", { required: true })} />
                        {errors.password && <span>Este campo es requerido</span>}
                    </FormField>
                    <Button type="submit" title="Guardar" />
                </form>
            </Card>
        </div>
    );
}
