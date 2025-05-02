import { Link } from "react-router";
import { URLS } from "../navigation/CONTANTS";


export const GuestMenu = () => {
    return (
        <div className="justify-end p-4 flex">
            <div className="flex items-center space-x-4">
                <Link to={URLS.LOGIN} className="text-blue-600 hover:text-black">Iniciar Sesión</Link>
                <Link to={URLS.REGISTER} className="text-blue-600 hover:text-black">Registrarse</Link>
            </div>
        </div>
    );
}