import React from 'react'
import styles from './Pagination.module.scss'

interface PaginationI {
	items: number
	pageSize: number
	currentPage: number
	onPageChange: (page: number) => void
}

const Pagination = ({
	items,
	pageSize,
	currentPage,
	onPageChange,
}: PaginationI) => {
	const pagesCount = Math.ceil(items / pageSize)

	if (pagesCount === 1) return null
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

	return (
		<>
			<div className={styles.pagination}>
				<ul>
					{pages.map((page) => (
						<li
							key={page}
							className={
								page === currentPage
									? styles.pageItemActive
									: styles.pageItem
							}
						>
							<a onClick={() => onPageChange(page)}>{page}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
export default Pagination
