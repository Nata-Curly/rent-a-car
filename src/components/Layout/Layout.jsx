import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Form from 'components/Form/Form';

export const Layout = () => {
    return (
        <>
            <Header />
            <Form/>
            <Suspense fallback={<Loader />} />
            <Outlet />
        </>
    );
};