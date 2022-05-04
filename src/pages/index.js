import React from "react";
import Slide from "../components/Slide";
import Selling from "../components/Selling";
import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";

const Index = () => {
    const htmlMarkup = (html) => {
        return {__html: html};
    };

    return (
        <>
            <div className="container mx-auto">
                <NavBar />
                <Slide />
                <Selling/>

                <div className='mt-8 '>
                    <h4>Hot</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                        <div className="col-span-2 ...">
                            <ProductItem />
                        </div>
                        <ProductItem />
                        <ProductItem />

                        <ProductItem />
                        <ProductItem />
                        <div className="col-span-2 ...">
                            <ProductItem />
                        </div>

                    </div>
                </div>

                <div className='mt-8 relative'>
                    <h4>Bài viết</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    );
};

export default Index;
