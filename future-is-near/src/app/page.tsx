"use client"

import { NextPage } from 'next';
import Layout from "@/components/Layout/Layout";

const Page: NextPage = () => {
    return(
        <Layout showSidebar>
            <h1>Это главная страница</h1>
        </Layout>
    );
}

export default Page;