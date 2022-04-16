import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout : React.FC = () => <>
    <Header/>
    <main className="main has-background-primary">
        <Outlet/>
    </main>
    <Footer/>
</>

export default MainLayout;
