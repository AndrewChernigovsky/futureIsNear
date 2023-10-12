'use client'

import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import { characteristics } from '../../components/globals/CatalogCard/data'
import styles from './../Page.module.scss'
import Pagination from '@/components/globals/Pagination/Pagination'
import { useState } from 'react'
import paginate from '@/components/globals/Pagination/paginate'
import CatalogCard from '@/components/globals/CatalogCard/CatalogCard'

const Garden: NextPage = () => {
	let allCategory = characteristics[0].garden.categories
	let length = allCategory.length

	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 8

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}

	const paginatedPosts = paginate(allCategory, currentPage, pageSize)

	return (
		<Layout showSidebar>
			<div className="main-wrapper">
				<h1>Дом и сад</h1>

				<div className={styles.products}>
					{paginatedPosts.map((product: any) => {
						return (
							<CatalogCard
								image={product.path!}
								title={product.name!}
								price={product.cost!}
								key={product.id}
							/>
						)
					})}
				</div>
				<Pagination
					items={length}
					currentPage={currentPage}
					pageSize={pageSize}
					onPageChange={onPageChange}
				/>
			</div>
		</Layout>
	)
}

export default Garden
