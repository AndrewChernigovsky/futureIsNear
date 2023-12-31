import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'

interface ILayout {
	children: ReactNode
	showSidebar?: boolean
}

const Layout: FC<ILayout> = ({ children, showSidebar }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				{showSidebar ? <Sidebar /> : ''}
				<main className={styles.container}>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
