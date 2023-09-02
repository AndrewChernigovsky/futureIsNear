import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import Product from './product/Product'
import { characteristics } from './product/data'
import styles from './Page.module.scss'

const Page: NextPage = () => {
  return (
    <Layout showSidebar>
      <h1>Электроника</h1>
      <div className={styles.category}>
        <h3>Видеокарты</h3>
        <div className={styles.products}>
          {characteristics[0].electronics.videocards.map((product) => {
            return (
              <>
                <div className={styles.products__product} key={product.id}>
                  <Product
                    cost={product.cost}
                    weight={product.weight}
                    color={product.color}
                    name={product.name}
                    sizes={product.sizes}
                    href={product.href}
                    desc={product.desc}
							path={product.path}
							rate={product.rate}
                  />
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={styles.category}>
        <h3>Мониторы</h3>
        <div className={styles.products}>
          {characteristics[0].electronics.displays.map((product) => {
            return (
              <>
                <div className={styles.products__product} key={product.id}>
                  <Product
                    cost={product.cost}
                    weight={product.weight}
                    color={product.color}
                    name={product.name}
                    sizes={product.sizes}
                    href={product.href}
                    desc={product.desc}
                    path={product.path}
                    rate={product.rate}
                  />
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={styles.category}>
        <h3>Беспроводные мышки</h3>
        <div className={styles.products}>
          {characteristics[0].electronics.mouses.map((product) => {
            return (
              <>
                <div className={styles.products__product} key={product.id}>
                  <Product
                    cost={product.cost}
                    weight={product.weight}
                    color={product.color}
                    name={product.name}
                    sizes={product.sizes}
                    href={product.href}
                    desc={product.desc}
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
				<li><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">7</a></li>
				<li><a href="">8</a></li>
				<li><a href="">9</a></li>
				<li><a href="">10</a></li>
			  </ul>
		  </div>
    </Layout>
  )
}

export default Page
