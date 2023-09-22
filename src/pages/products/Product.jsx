import { useLoaderData } from "react-router-dom";


const Product = () => {
    const product = useLoaderData();
    const{title,description,thumbnail,brand,category,price} = product;
    return (
        <div className="flex justify-center items-center min-h-[80vh] p-5">  
            <div className=" p-4 w-full h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thumbnail} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <div className="flex justify-between">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{brand}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;