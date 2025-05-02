import { Routes, Route } from "react-router";
import MaterialList from "../pages/MateriaList";
import { MateriaForm } from "../pages/MateriaForm";
import { URLS } from "./CONTANTS";
import AlumnoList from "../pages/AlumnoList";
import { AlumnoForm } from "../pages/AlumnoForm";
import { LoginForm } from "../pages/LoginForm";
import { RegisterForm } from "../pages/RegisterForm";
import { InscripcionForm } from "../pages/InscripcionForm";

const RouterConfig = () => {
    return (
        <Routes>
            <Route path={URLS.HOME} element={< MaterialList />} />
            <Route path={URLS.MATERIAS.CREATE} element={< MateriaForm />} />
            <Route path={URLS.MATERIAS.EDIT} element={< MateriaForm />} />
            <Route path={URLS.ALUMNOS.LIST} element={< AlumnoList />} />
            <Route path={URLS.ALUMNOS.CREATE} element={< AlumnoForm />} />
            <Route path={URLS.ALUMNOS.EDIT} element={< AlumnoForm />} />
            <Route path={URLS.LOGIN} element={< LoginForm />} />
            <Route path={URLS.REGISTER} element={< RegisterForm />} />
            <Route path={URLS.INSCRIPCIONES.CREATE} element={< InscripcionForm />} />
        </Routes>
    );
}
export default RouterConfig;