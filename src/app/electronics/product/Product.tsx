import { FC } from 'react'
import React from 'react'
import Link from 'next/link'
import styles from './Product.module.scss'
import Image from 'next/image'

interface ProductI {
  cost: number
  weight: number
  color: string
  name: string
  sizes: string
  path: string
	href: string
	resizes: string
	rate: number
}

const Product: React.FC<ProductI> = ({
  cost,
  weight,
  color,
  name,
  sizes,
  path,
	href,
	rate,
  resizes
}) => {
  return (
    <>
      <a href={href} className={styles.product}>
        <div className={styles.product__image}>
          <Image src={path} width={300} alt="product" height={300} />
        </div>
        <div className={styles.product__charachteristics}>
          <table>
            <thead>
              <tr>
                <th>
                  <h3>
                    <a href={href}>{name}</a>
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Цена:</td>
                <td>{cost}</td>
              </tr>
              <tr>
                <td>Вес:</td>
                <td>{weight}</td>
              </tr>
              <tr>
                <td>Расцветка:</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Размеры:</td>
                <td>{sizes}</td>
              </tr>
					  </tbody>
					  <tfoot>
						  <tr>
							  <td>Рейтинг:</td>
							  <td>{rate}</td>
						  </tr>
					  </tfoot>
          </table>
        </div>
      </a>
    </>
  )
}

export default Product
