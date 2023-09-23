import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import styles from './Product.module.scss'
import Image from 'next/image'

export interface ProductI {
	cost?: string
	weight?: string
	color?: string
	name?: string
	sizes?: string
	path?: string
	href?: string
	resizes?: string
	rate?: number
	desc?: string
}

const Product: FC<ProductI> = ({
	cost,
	weight,
	color,
	name,
	sizes,
	path,
	href,
	rate,
	resizes,
	desc,
}) => {
	return (
		<>
			<a href={href} className={styles.product}>
				<div className={styles.product__image}>
					<Image src={path!} width={300} alt="product" height={300} />
				</div>
				<div className={styles.product__charachteristics}>
					<h3>{name}</h3>
					<div className={styles.product__charachteristics_wrapper}>
						<table>
							<tbody>
								<tr>
									<td className={styles.product__cost}>
										{cost} Р
									</td>
									<td>{weight} Г</td>
								</tr>
								<tr>
									<td>Цвет</td>
									<td>{color}</td>
								</tr>
								<tr>
									<td>Размеры</td>
									<td>{resizes}</td>
								</tr>
								<tr>
									<td>{sizes} </td>
									<td>{rate}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p>{desc}</p>
					<span>Читать далее...</span>
				</div>
			</a>
		</>
	)
}

export default Product
