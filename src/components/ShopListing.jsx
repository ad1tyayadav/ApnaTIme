import React from "react";
import { dummyShopData } from "../../public/ShopData/shopData";
import ShopCard from "./ShopCard";

const ShopsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Explore Shops</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {dummyShopData.map((shop) => (
                    <div key={shop.id}>
                        <ShopCard shop={shop} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopsPage;
