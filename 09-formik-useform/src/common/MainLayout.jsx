import { Outlet } from "react-router";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import './MainLayout.css';
function MainLayout() {
    return (
        <div className="main-container">
            <HeaderNav />
            <Outlet />
            <Footer />
        </div>
    );
}
export default MainLayout;