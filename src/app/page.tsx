import { NextPage } from 'next'
import Layout from '../components/globals/Layout/Layout'

const Page: NextPage = () => {
	return (
		<>
			<Layout showSidebar>
				<div className="main-wrapper">
					<h1>Это главная страница</h1>
				</div>
			</Layout>
		</>
	)
}

export default Page
