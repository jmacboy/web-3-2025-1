import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Input"
import { FormField } from "../components/FormField"
import { Card } from '../components/Card';
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { URLS } from "../navigation/CONTANTS";
import { AuthService } from "../services/AuthService";
import { RegisterRequest } from "../models/dto/RegisterRequest";
import { Container } from "../components/Container";
import { useState } from "react";
import { GuestMenu } from "../components/GuestMenu";

type Inputs = {
    email: string
    password: string
}
export const RegisterForm = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
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
            }).catch(() => {
                setError("El email ya está en uso")
            });
    }

    return (
        <>
            <GuestMenu />
            <Container>
                <Card title="Registro" className="mx-5 my-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="text-red-500">{error}</div>}
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
            </Container>
        </>
    );
}
