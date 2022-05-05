import React, {useEffect} from "react";

import Slide from "../components/Slide";
import Selling from "../components/Selling";

import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";

import {useSelector} from "react-redux";


const Index = () => {
    const sellingProducts = useSelector(state => state.product.productSelling.data.data);
    const hotProducts = useSelector(state => state.product.productHot.data.data);



    return (
        <>
            <div className="container mx-auto">
                <NavBar/>
                <Slide/>
                <Selling sellingProducts={sellingProducts}/>

                <div className='mt-8 '>
                    <h4>Hot</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                        {(hotProducts || []).map((item, index) => {
                            if (index == 0 || index == 5) {
                                return (
                                    <div className="col-span-2" key={index}>
                                        <ProductItem product={item}/>
                                    </div>
                                )
                            }
                            return (
                                <div key={index}>
                                <ProductItem product={item}/>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='mt-8 relative'>
                    <h4>Bài viết</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </>
    );
};

export default Index;
