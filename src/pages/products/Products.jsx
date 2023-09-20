import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {

    const newProducts = useLoaderData();
    const products = newProducts.products;

    
    console.log(products);

    return (
        <div>
            <div className=" min-h-screen p-5 grid grid-cols-3 gap-5"> 
                {
                    products?.map(product => <ProductCart key={product.id} product={product}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Products;