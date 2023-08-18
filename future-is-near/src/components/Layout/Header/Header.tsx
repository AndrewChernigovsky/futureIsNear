import { FC } from 'react';
import React from 'react'
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect } from "react"
	
const Header: FC = () => {
	const [open, setOpened] = React.useState(true);
	const useWindowDimensions = () => {
		const hasWindow = typeof window !== "undefined"

		function getWindowDimensions() {
			const width = hasWindow ? window.innerWidth : null
			const height = hasWindow ? window.innerHeight : null
			return {
				width,
				height,
			}
		}

		const [windowDimensions, setWindowDimensions] = useState(
			getWindowDimensions()
		)

		useEffect(() => {
			if (hasWindow) {
				function handleResize() {
					setWindowDimensions(getWindowDimensions())
				}

				window.addEventListener("resize", handleResize)
				return () => window.removeEventListener("resize", handleResize)
			}
		}, [hasWindow])

		return windowDimensions
	}
	const { height, width } = useWindowDimensions()
	const breakpoint = 768

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
					>
						<ul className={styles.nav__list}>
							<li>
								<Link href="/features">Услуги</Link>
							</li>
							<li>
								<Link href="/customers">Клиенты</Link>
							</li>
							<li>
								<Link href="/products">Цены</Link>
							</li>
							<li>
								<Link href="/company">О компании</Link>
							</li>
						</ul>
					</div>
					<ul className={styles.nav__auth}>
						<li>
							<Link color="inherit" href="/login">
								{open && width <= breakpoint ? (
									<Image
										src="/avatar.png"
										width={100}
										height={100}
										alt="Picture of the author"
									/>
								) : (
									'Войти'
								)}
							</Link>
						</li>
						<li>
							<Link color="inherit" href="/signUp">
								Зарегистрироваться
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
