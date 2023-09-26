'use client'

import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import { characteristics } from '../../components/globals/CatalogCard/data'
import styles from './Page.module.scss'
import Pagination from '@/components/globals/Pagination/Pagination'
import { useState } from 'react'
import paginate from '@/components/globals/Pagination/paginate'
import CatalogCard from '@/components/globals/CatalogCard/CatalogCard'

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

			<div className={styles.products}>
				{paginatedPosts.map((product: any) => {
					return (
						<CatalogCard
							image={product.path}
							title={product.name}
							price={product.cost}
						/>
					)
				})}
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
