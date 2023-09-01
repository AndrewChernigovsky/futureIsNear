import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import styles from 'Product.module.scss'

interface ProductI {
	cost: number;
	weight: number;
	color: string;
	name: string;
	sizes: string;
}

const Product: React.FC<ProductI> = ({cost, weight, color, name, sizes }) => {
	return (
    <>
      <div className={styles.Product}>
        {cost}
        {weight}
        {color}
        {name}
        {sizes}
      </div>
    </>
  )
}

export default Product
