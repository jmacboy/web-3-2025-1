import { Routes, Route } from "react-router";
import MaterialList from "../pages/MateriaList";
import { MateriaForm } from "../pages/MateriaForm";

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={< MaterialList />} />
            <Route path="/materias/create" element={< MateriaForm />} />
        </Routes>
    );
}
export default RouterConfig;