import { useNavigate } from "react-router-dom";

export default function ShopOwnerForm() {
    const navigate = useNavigate();

    const submitShop = (e) => {
        e.preventDefault();

        const shopName = document.getElementById('shopName').value;
        const shopDescription = document.getElementById('shopDescription').value;
        const shopCategory = document.getElementById('shopCategory').value;
        const shopImage = document.getElementById('shopImage').files[0];

        if (shopName && shopDescription && shopCategory && shopImage) {
            console.log("Shop data:", shopName, shopDescription, shopCategory, shopImage);
            navigate('/shop-lists')
        } else {
            console.error("Please fill in all required fields and select an image.");
        }
    };

    return (
        <div className="container mx-auto mt-12 mb-4 w-full max-w-lg bg-gray-900 text-white rounded-xl p-10 border border-black/10 mx-auto px-4 md:px-8 py-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add Your Shop</h2>
            <form className="flex flex-col space-y-4 max-w-md mx-auto" onSubmit={submitShop}>
                <div className="flex flex-col">
                    <label htmlFor="shopName" className="text-sm font-medium mb-1">Shop Name</label>
                    <input type="text" id="shopName" name="shopName" className="inputsField" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="shopDescription" className="text-sm font-medium mb-1">Shop Description</label>
                    <textarea id="shopDescription" name="shopDescription" className="inputsField" rows="5" required></textarea>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="shopCategory" className="text-sm font-medium mb-1">Shop Category</label>
                    <select id="shopCategory" name="shopCategory" className="inputsField" required>
                        <option value="">Select Category</option>
                        <option value="salon">Salon</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div className="sm:flex">
                    <div className="flex flex-col">
                        <label htmlFor="shopLocation" className="text-sm font-medium mb-1">Shop Location</label>
                        <input type="text" id="shopLocation" name="shopLocation" className="inputsField w-full" required />
                    </div>
                    <div className="flex flex-col justify-">
                        <label htmlFor="shopImage" className="text-sm font-medium mb-1">Shop Image</label>
                        <input type="file" id="shopImage" name="shopImage" className="inputsField w-[100%] text-white" />
                    </div>
                </div>
                <button type="submit" className="inline-flex justify-center items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full">
                    Add Shop
                </button>
            </form>
        </div>
    );
}
