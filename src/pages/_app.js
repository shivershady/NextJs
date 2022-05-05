import React, {useEffect} from "react";
import '../../styles/globals.css';

import {END} from "redux-saga";

import Head from "next/head";
import {wrapper} from "../store";
import {useDispatch} from "react-redux";

import {getProducts,getHotProducts, getSellingProducts} from "../actions/product";
import {getSlide} from "../actions/slide";

const MyApp = ({Component, pageProps}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getSellingProducts());
        dispatch(getHotProducts());
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

MyApp.getInitialProps = async ({Component, ctx}) => {
    const pageProps = {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
    if (ctx.req) {
        ctx.store.dispatch(END);
        await ctx.store.sagaTask.toPromise();
    }
    return {pageProps};
};

export default wrapper.withRedux(MyApp);
