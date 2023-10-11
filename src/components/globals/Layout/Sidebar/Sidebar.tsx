import { FC } from 'react'
import styles from './Sidebar.module.scss'
import React from 'react'
import Link from 'next/link'
import { categories } from './data'
import { useRouter } from 'next/navigation'

interface ICategory {
	href: string
	name: string
	size: number
	color: string
	image: (size: number, color: string) => React.JSX.Element
	desc: string
}

interface Props {
	active: boolean
}
const Sidebar: FC<Props> = (active: Props) => {
	const router = useRouter()
	let conditionalColor = active ? 'red' : 'blue'
	return (
		<aside className={styles.sidebar}>
			<p>{router.path}</p>
			<ul className={styles.sidebar__wrapper}>
				{categories.map((el: ICategory, index) => {
					return (
						<li key={index}>
							<Link href={el.href}>
								{el.image(
									(el.size = 25),
									(el.color = conditionalColor),
								)}
								<span className="visually-hidden">
									{el.desc}
								</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</aside>
	)
}

export default Sidebar
