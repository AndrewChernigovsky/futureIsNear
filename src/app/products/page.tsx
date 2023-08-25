import { NextPage } from 'next'
import Layout from '@/components/globals/Layout/Layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Компьютер | Товары  ',
  description:
    'Купить компьютер недорого, дешевые комплектующие, видеокарты, оперативная память',
}

const ProductsPage: NextPage = () => {
  return (
    <>
      <Layout showSidebar>
        <h1>страница товаров</h1>
        <button>Buy</button>
      </Layout>
    </>
  )
}

export default ProductsPage
