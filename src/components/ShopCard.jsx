import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
    return (
        <Link to={`/shop-details/${shop.id}`}>
            <div className="shop-card bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-sm md:max-w-md lg:max-w-full">
                <img src={shop.image} alt={shop.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{shop.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{shop.description}</p>
                    <span className="text-sm font-medium text-green-500">{shop.category}</span>
                </div>
            </div>
        </Link>
    );
};

export default ShopCard;
