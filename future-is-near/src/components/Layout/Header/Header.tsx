import { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { navList } from './data';
import { navAuth } from './data';

const Header: FC = () => {
	const [open, setOpened] = useState(true);

	const breakpoint = 1024;

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

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
							{navList.map((el: any, index: number) => {
								return (
									<li key={index}>
										<Link href={el.href}>{el.name}</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<form
						action=""
						method="post"
						className={styles.header__form}
					>
						<input type="search" name="search" id="search" />
						<button type="submit">
							<Image
								src="/search.svg"
								width={30}
								height={30}
								alt="Picture of the author"
							/>
						</button>
					</form>
					<ul className={styles.nav__auth}>
						{navAuth.map((el: any, index: number) => {
							return (
								<li key={index}>
									<Link color="inherit" href={el.href}>
										{windowWidth <= breakpoint ? (
											<Image
												src={el.image}
												width={30}
												height={30}
												alt="Picture of the author"
											/>
										) : (
											<>
												<Image
													src={el.image}
													width={30}
													height={30}
													alt="Picture of the author"
												/>
												{`${el.name}`}
											</>
										)}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
