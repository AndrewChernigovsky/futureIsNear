"use client"

import { NextPage } from 'next';
import Layout from "@/components/Layout/Layout";
import Button from 'next-npm-scss/Buttons/Button';

const Page: NextPage = () => {
    return(
        <Layout showSidebar>
			<h1>Это главная страница</h1>
			{/* <Button
			
				border='1px solid black'
				color='red'
				height='50px'
				radius='4px'
				width='50px'
			
			>Button</Button> */}
        </Layout>
    );
}

export default Page;