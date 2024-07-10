import React from "react";
import { useParams } from "react-router-dom";
import { dummyShopData } from "../../public/ShopData/shopData";
import { Link } from "react-router-dom";

const ShopView = () => {
    const { id } = useParams();
    const shop = dummyShopData.find((shop) => shop.id === parseInt(id));

    if (!shop) {
        return <div>Shop not found</div>;
    }

    return (
        <div className="shop-card bg-white rounded-lg mt-20 mb-16 shadow-md overflow-hidden mx-auto w-[80%] sm:w-[60vw]">
            <img src={shop.image} alt={shop.name} className="w-full h-48 object-cover" />
            <div className="p-8 sm:flex sm:flex-col items-center"> {/* Increased padding for breathing space */}
                <h3 className="text-lg font-semibold mb-2">{shop.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{shop.description}</p>
                <span className="text-sm font-medium text-green-500">{shop.category}</span>
                <div className="flex items-center mt-2">
                    <span className="text-sm">{shop.location}</span>
                </div>
                <div className="cta-container mt-8 flex justify-center md:justify-end">
                    <Link to='/book-appointment' className="btn btn-primary px-4 py-2 rounded-md text-white font-medium" >Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ShopView;