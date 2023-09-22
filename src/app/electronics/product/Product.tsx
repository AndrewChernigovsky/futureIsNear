import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import styles from './Product.module.scss'
import Image, { StaticImageData } from 'next/image'

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
  desc
}) => {
  return (
    <>
      <a href={href} className={styles.product}>
        <div className={styles.product__image}>
          <Image src={path!} width={300} alt="product" height={300} />
        </div>
        <div className={styles.product__charachteristics}>
				  <p> {name} {cost} {weight} {color} {rate} {resizes}  {sizes} {desc}</p>  
        </div>
      </a>
    </>
  )
}

export default Product
