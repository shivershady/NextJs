import React, {useEffect, useState} from 'react';
import {formatMoney} from "../../lib/helper";
import {incrementProductToCart, decrementProductToCart, removeProductToCart} from "../../helper/handleProduct";
import {postOrder} from "../../actions/order";
import {useDispatch} from "react-redux";

function Index(props) {
    const dispatch = useDispatch();

    const [carts, setCarts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);
    const [userInformation, setUserInformation] = useState({
        delivery_address: '',
        delivery_phone: '',
        delivery_name: '',
        note: ''
    });
    const {delivery_address, delivery_phone, delivery_name, note} = userInformation;

    useEffect(() => {
        const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
        setCarts(carts);
        setSubTotal(carts.reduce((total, cart) => total + cart.price * cart.quantity, 0));
    }, []);

    useEffect(() => {
        setTax(subTotal * 0.1);
        setShipping(subTotal * 0.1);
        setTotal(subTotal + tax + shipping);
    }, [subTotal]);

    useEffect(() => {
        setSubTotal(carts.reduce((total, cart) => total + cart.price * cart.quantity, 0));
        setTax(subTotal * 0.1);
        setShipping(subTotal * 0.1);
        setTotal(subTotal + tax + shipping);
    }, [carts]);

    const handleChange = (e) => {
        setUserInformation({...userInformation, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        dispatch(postOrder({
            delivery_address,
            delivery_phone,
            delivery_name,
            note,
            ship_fee: shipping,
            tax: tax,
            item_price: total,
            items: carts
        }));
        localStorage.removeItem('carts');
        setCarts([]);
        setUserInformation({
            delivery_address: '',
            delivery_phone: '',
            delivery_name: '',
            note: ''
        })
    }
    return (
        <div>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div
                    className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    {/*Order==================================================================================================*/}
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div
                            className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Order</p>
                            {(carts || []).map((product, index) => (
                                <div key={index}
                                     className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block"
                                             src={process.env.API_URL + "/storage/" + product?.thumb[0]} alt="dress"/>
                                        <img className="w-full md:hidden"
                                             src={process.env.API_URL + "/storage/" + product?.thumb[0]} alt="dress"/>
                                    </div>
                                    <div
                                        className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start gap-8 w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{product.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                {(product.filters || []).map((filter, index) => (
                                                    <div key={index}
                                                         className="text-sm dark:text-white leading-none text-gray-800">
                                                        <span
                                                            className="dark:text-gray-400 text-gray-300">{filter.name}: </span>
                                                        {filter.childs.map((child, index) => (
                                                            (product.currentFilter || []).map((currentFilter, index) => (
                                                                currentFilter === child.id && (
                                                                    <span className="ml-4 uppercase"
                                                                          key={index}>{child.name}</span>
                                                                )
                                                            ))
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base dark:text-white xl:text-lg leading-6">{formatMoney(product?.price)}
                                                <span
                                                    className="text-red-300 line-through"> {formatMoney(product?.old_price)}</span>
                                            </p>
                                            <div className="flex items-center justify-between gap-2">
                                                <button onClick={() => {
                                                    decrementProductToCart(product, 1);
                                                    setCarts(JSON.parse(localStorage.getItem('carts')))
                                                }}
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">-
                                                </button>
                                                <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{product.quantity}</p>
                                                <button onClick={() => {
                                                    incrementProductToCart(product, 1)
                                                    setCarts(JSON.parse(localStorage.getItem('carts')))
                                                }}
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">+
                                                </button>
                                            </div>
                                            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{formatMoney(product.price * product.quantity)}</p>
                                        </div>
                                        <button onClick={() => {
                                            removeProductToCart(product, index);
                                            setCarts(JSON.parse(localStorage.getItem('carts')))
                                        }}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Xóa
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div
                                className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                                <div
                                    className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{formatMoney(subTotal)}</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-white leading-4 text-gray-800">Tax
                                        </p>
                                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{formatMoney(tax)}
                                            (10%)</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{formatMoney(shipping)}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{formatMoney(total)}</p>
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-8 h-8">
                                            <img className="w-full h-full" alt="logo"
                                                 src="https://i.ibb.co/L8KSdNQ/image-3.png"/>
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD
                                                Delivery<br/><span className="font-normal">Delivery with 24 Hours</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button
                                        className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View
                                        Carrier Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*User==================================================================================================*/}
                    <div
                        className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Receiver</h3>
                        <div
                            className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div
                                    className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                    <div
                                        className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <label
                                            className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Địa
                                            chỉ khách hàng</label>
                                        <input type="text"
                                               className="bg-gray-400 text-white text-center"
                                               name="delivery_address"
                                               value={delivery_address}
                                               onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div
                                        className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <label
                                            className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Số
                                            điẹn thoại khách hàng</label>
                                        <input type="text"
                                               className="bg-gray-400 text-white text-center"
                                               name="delivery_phone"
                                               value={delivery_phone}
                                               onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div
                                        className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <label
                                            className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Tên
                                            khách hàng</label>
                                        <input type="text"
                                               className="bg-gray-400 text-white text-center"
                                               name="delivery_name"
                                               value={delivery_name}
                                               onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <div
                                        className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <label
                                            className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Note</label>
                                        <input type="text"
                                               className="bg-gray-400 text-white text-center"
                                               name="note"
                                               value={note}
                                               onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex w-full justify-center items-center md:justify-start md:items-start">
                                    <button onClick={() => handleSubmit()}
                                            className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                                        Đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;