import React, {useEffect, useState} from 'react';
import {formatMoney} from "../lib/helper";

function ProductDetail({product, handleQuantityProduct}) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        handleQuantityProduct(quantity);
    }, [quantity]);

    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <img className="w-full h-full object-cover"
                 src={process.env.API_URL + "/storage/" + product?.thumb[0]}
                 alt="avatar"/>
            <div className="py-4 px-6">
                <h1 className="text-2xl font-semibold text-gray-800">{product?.name}</h1>
                <p className="py-2 text-lg text-gray-700">{product?.description}</p>
                <div className="flex items-center mt-4 gap-6">
                    <p className="text-red-500 font-bold">
                        {formatMoney(product?.price)}
                    </p>
                    <p className="line-through text-gray-500 font-bold">{formatMoney(product?.old_price)}</p>
                </div>
                <div className="my-4 space-y-2">
                    <div className="text-xl font-bold">Số lượng</div>
                    <div className="flex gap-8">
                        <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}>-
                        </button>
                        <input type="text" className="w-8 text-center" value={quantity} onChange={event => setQuantity(event.target.value)}/>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;