import { Route, Routes } from "react-router-dom";
import NotFound from "../../notfound/notfound";
import Confession from "../confession/confession";
import Home from "../home/home";
import MainLayout from "../mainlayout/mainlayout";
import Misdameanour from "../misdemeanour/misdameanour";

const Router = () => <Routes>
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="confession" element={<Confession/>}/>
        <Route path="misdameanour" element={<Misdameanour/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
</Routes>;

export default Router;