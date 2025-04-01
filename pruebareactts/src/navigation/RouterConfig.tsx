import { Routes, Route } from "react-router";
import MaterialList from "../pages/MateriaList";

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={< MaterialList />} />
        </Routes>
    );
}
export default RouterConfig;