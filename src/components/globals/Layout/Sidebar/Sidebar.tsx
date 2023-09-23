'use client'

import { FC } from 'react'
import styles from './Sidebar.module.scss'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { categories } from './data'

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles.sidebar__wrapper}>
				{categories.map(
					(
						el: {
							href: string
							name: string
							size: number
							color: string
							image: (
								size: number,
								color: string,
							) => React.JSX.Element
							desc: string
						},
						index: number,
					) => {
						return (
							<li key={index}>
								<Link color="inherit" href={el.href}>
									{el.image(
										(el.size = 25),
										(el.color = 'white'),
									)}
									<span className="visually-hidden">
										{el.desc}
									</span>
								</Link>
							</li>
						)
					},
				)}
			</ul>
		</aside>
	)
}

export default Sidebar
