import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
const MainLayouts = () => {
    return (
        <div>
            <section>
                <div className='py-4 shadow-lg'>
                    <Nav></Nav>
                </div>
                <div className=" min-h-screen">
                    <Outlet></Outlet>
                </div>
                <div className="py-4 shadow-lg">
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default MainLayouts;