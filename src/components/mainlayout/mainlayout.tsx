import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout : React.FC = () => 
    <html>
        <body>   
            <article>
                <Header/>
                <main className="main has-background-primary">
                    <Outlet/>
                </main>
                <Footer/>
            </article>
        </body> 
    </html>
export default MainLayout;
