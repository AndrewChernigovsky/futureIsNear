'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useState } from 'react'
import { categories } from './data'
import { ImSearch } from 'react-icons/im'

const Header: FC = () => {
	const [open, setOpened] = useState(true)

	return (
		<>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<button
						type="button"
						className={styles.nav__btn}
						onClick={() => setOpened(!open)}
					>
						<span></span>
						<span className="visually-hidden">Открыть меню</span>
					</button>
					<div
						className={
							open
								? styles.nav__wrapper + ' ' + styles.active
								: styles.nav__wrapper
						}
					></div>
					<form
						action=""
						method="POST"
						className={styles.header__form}
					>
						<input type="search" name="search" id="search" />
						<button type="submit">
							<ImSearch size={20} color={'blue'} />
						</button>
					</form>
					<Link className={styles.header__logoText} href="/">
						LOGOTYPE
					</Link>
					<ul className={styles.nav__auth}>
						{categories.map((el, index) => {
							return (
								<li key={index}>
									<Link color="inherit" href={el.href}>
										{el.image(
											(el.size = 20),
											(el.color = 'white'),
										)}
										<span style={{ color: el.color }}>
											{el.name}
										</span>
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
