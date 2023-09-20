import { useLoaderData } from "react-router-dom";

const Products = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <div className=" min-h-screen flex items-center content-center text-4xl text-rose-950">  This is Home Page</div>
        </div>
    );
};

export default Products;