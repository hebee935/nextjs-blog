import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

import Layout from '../components/Layout';

const configureStore = (initialState = {}, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ?
        compose(applyMiddleware(...middlewares)) :
            composeWithDevTools(applyMiddleware(...middlewares));
    return createStore(reducers, initialState, enhancer);

};

class RootApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Head>
                    <title>My Blog</title>
                </Head>
                <CssBaseline />
                <Layout>
                    <Component {...other} />
                </Layout>
            </Container>
        )
    }
}

export default withRedux(configureStore)(RootApp)