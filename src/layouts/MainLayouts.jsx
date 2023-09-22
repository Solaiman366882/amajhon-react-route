import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
const MainLayouts = () => {

    const isLoadingData = useNavigation();
    console.log(isLoadingData.state ==='loading');

    return (
        <div>
            <section>
                <div className='py-4 shadow-lg'>
                    <Nav></Nav>
                </div>
                <div className=" min-h-screen">
                {
                    isLoadingData?<Spinner></Spinner>:<Outlet></Outlet>
                }
                </div>
                <div className="py-4 shadow-lg">
                    <Footer></Footer>
                </div>
            </section>
        </div>
    );
};

export default MainLayouts;