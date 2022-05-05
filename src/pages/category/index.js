import React, {useEffect , useState} from 'react';
import NavBar from "../../components/NavBar";
import Slide from "../../components/Slide";
import ProductItem from "../../components/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../actions/product";
import {getCategory, getFilterCategory} from "../../actions/category";

function Index() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategory())
    }, []);

    const listProduct = useSelector(state => state.product.product.data.data);
    const listCategory = useSelector(state => state.category.category.data.data);
    const filterCat = useSelector(state => state.category.categoryFilter.data.data);
    const [showFilter, setShowFilter] = useState('');

    const getFilterCat = (id) => {
        dispatch(getFilterCategory({id: id}));
        setShowFilter(id);
    }
    const handleFilter = () => {

    }
    return (
        <div className="container mx-auto space-y-4">
            <NavBar/>
            <Slide page_type={2}/>

            <div className="flex flex-no-wrap">
                <div
                    className="w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex my-12">
                    <div className="px-8">
                        <ul className="mt-12">
                            {(listCategory || []).map((item, index) => {
                                return (
                                    <li className="w-full text-gray-300 cursor-pointer items-center mb-6"
                                        key={index}>
                                        <div className="flex items-center  hover:text-gray-500">
                                            <span onClick={() => getFilterCat(item.id)}
                                                  className="text-sm  ml-2">{item.name}</span>
                                        </div>
                                        <ul className="list-disc ml-8">
                                            {filterCat && item.id===showFilter && filterCat.map((item, index) =>
                                                <>
                                                <li key={index} onClick={()=>handleFilter()}>{item.name}</li>

                                                </>
                                            )}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    <div
                        className="w-full h-full rounded border-dashed border-2 border-gray-300">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                            {
                                (listProduct || []).map((item, index) =>
                                    <ProductItem key={index} product={item}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;