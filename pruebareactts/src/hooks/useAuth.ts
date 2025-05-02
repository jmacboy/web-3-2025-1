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
        localStorage.setItem("access_token", params.access_token);
        localStorage.setItem("refresh_token", params.refresh_token);
    }
    const doLogout = () => {
        dispatch(logoutUser())
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
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