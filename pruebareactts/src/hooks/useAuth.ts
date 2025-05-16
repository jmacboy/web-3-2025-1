import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { loginUser, logoutUser } from "../redux/slices/authSlice"
import { AuthService } from "../services/AuthService"
type LoginParams = {
    access_token: string,
    refresh_token: string,
    email: string,
}
export const useAuth = () => {
    const dispatch = useAppDispatch()
    const email = useAppSelector((state) => state.auth.email)
    const doLogin = (params: LoginParams) => {
        dispatch(loginUser(params.email))
    }
    const doLogout = () => {
        new AuthService()
            .logout()
            .then(() => {
                dispatch(logoutUser())
            })
            .catch((error) => {
                console.error("Error al cerrar sesión: ", error)
            })
    }
    useEffect(() => {
        new AuthService()
            .me()
            .then((response) => {
                // console.log("User data", response)
                if (response.email) {
                    dispatch(loginUser(response.email))
                }
            });
    }, [])

    return { email, doLogin, doLogout }
}