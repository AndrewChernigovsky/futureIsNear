import Layout from '@/components/globals/Layout/Layout'
import { NextPage } from 'next'
import Product  from './product/Product'


const Page: NextPage = () => {
  return (
    <Layout showSidebar>
		  <h1>Электроника</h1>
		  <div>
			  <Product cost weight color name sizes />
		  </div>
    </Layout>
  )
}

export default Page
