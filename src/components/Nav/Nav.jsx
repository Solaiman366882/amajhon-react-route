import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex justify-between items-center px-5">
            <h2 className=" text-xl font-bold">Amajhon</h2>
            <ul className="flex gap-4">
                <li className="text-lg hover:bg-green-800 p-2 hover:text-white rounded-lg"><NavLink to="/">Home</NavLink></li>
                <li className="text-lg hover:bg-green-800 p-2 hover:text-white rounded-lg"><NavLink to="/products">Products</NavLink></li>
                <li className="text-lg hover:bg-green-800 p-2 hover:text-white rounded-lg"><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li className="text-lg hover:bg-green-800 p-2 hover:text-white rounded-lg"><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;