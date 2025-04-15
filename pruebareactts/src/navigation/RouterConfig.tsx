import { Routes, Route } from "react-router";
import MaterialList from "../pages/MateriaList";
import { MateriaForm } from "../pages/MateriaForm";
import { URLS } from "./CONTANTS";

const RouterConfig = () => {
    return (
        <Routes>
            <Route path={URLS.HOME} element={< MaterialList />} />
            <Route path={URLS.MATERIAS.CREATE} element={< MateriaForm />} />
            <Route path={URLS.MATERIAS.EDIT} element={< MateriaForm />} />
        </Routes>
    );
}
export default RouterConfig;