'use client'
import { FC } from 'react'
import styles from './Sidebar.module.scss'
import React from 'react'
import Link from 'next/link'
import { categories } from './data'
import { usePathname } from 'next/navigation'

interface ICategory {
	href: string
	name: string
	size: number
	color: string
	image: (size: number, color: string) => React.JSX.Element
	desc: string
}

const Sidebar: FC = () => {
	const pathname = usePathname()
	return (
		<aside className={styles.sidebar}>
			<ul className={styles.sidebar__wrapper}>
				{categories.map((el: ICategory, index) => {
					return (
						<li key={index}>
							<Link href={el.href}>
								{el.image(
									(el.size = 25),
									(el.color =
										pathname === el.href
											? 'orange'
											: 'white'),
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
