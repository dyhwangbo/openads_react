import { Outlet } from "react-router-dom";
import MainFooter from "./mainFooter";
import MainHeader from "./mainHeader";

const MainLayout = () => {
    
    return (
    <>
        <MainHeader />
        <Outlet />
        <MainFooter />
    </>
    );
}

export default MainLayout;