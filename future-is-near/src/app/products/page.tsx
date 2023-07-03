'use client';

import { NextPage } from 'next';
import Layout from '@/components/Layout/Layout';


const ProductsPage: NextPage = () => {
	return (
		<Layout showSidebar>
			<h1>страница товаров</h1>

			<button>
				Buy
			</button>
		</Layout>
	);
};

export default ProductsPage;
