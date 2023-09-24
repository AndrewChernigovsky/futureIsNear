'use client'

import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import Product from './product/Product'
import { characteristics } from './product/data'
import styles from './Page.module.scss'
import Pagination from '@/components/screens/Pagination/Pagination'
import { useState } from 'react'
import paginate from '@/components/screens/Pagination/paginate'

const Page: NextPage = () => {
	let allCategory = characteristics[0].electronics.categories
	let length = allCategory.length

	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 8

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	const paginatedPosts = paginate(
		characteristics[0].electronics.categories,
		currentPage,
		pageSize,
	)

	return (
		<Layout showSidebar>
			<h1>Электроника</h1>

			<div className={styles.category}>
				<div className={styles.products}>
					{paginatedPosts.map((product: any) => {
						return (
							<div
								className={styles.products__product}
								key={product.id}
							>
								<Product
									cost={product.cost}
									weight={product.weight}
									color={product.color}
									name={product.name}
									sizes={product.sizes}
									resizes={product.resizes}
									href={product.href}
									desc={product.desc!}
									path={product.path}
									rate={product.rate}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<Pagination
				items={length} // 100
				currentPage={currentPage} // 1
				pageSize={pageSize} // 10
				onPageChange={onPageChange}
			/>
		</Layout>
	)
}

export default Page
