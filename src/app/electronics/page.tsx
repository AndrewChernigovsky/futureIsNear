import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import Product from './product/Product'
import { characteristics } from './product/data'
import styles from './Page.module.scss'
import { ProductI } from './product/Product'

const Page: NextPage = () => {
	let allCategory = characteristics[0].electronics.categories
	let pagination: number[] = []

	allCategory.map((el, index) => {
		if (allCategory.length > 8) {
			pagination.push((index += 1))
		} else {
			pagination.push((index = 1))
		}
	})

	return (
		<Layout showSidebar>
			<h1>Электроника</h1>
			<div className={styles.category}>
				<div className={styles.products}>
					{allCategory.map((product) => {
						return (
							<>
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
							</>
						)
					})}
				</div>
			</div>
			<div className={styles.pagination}>
				<ul>
					{pagination.map((el, i) => {
						return (
							<li>
								<a>{i + 1}</a>
							</li>
						)
					})}
				</ul>
			</div>
		</Layout>
	)
}

export default Page
