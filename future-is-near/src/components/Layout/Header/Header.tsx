import { FC } from 'react';
import React from 'react'
import Link from 'next/link';
import styles from './Header.module.scss';

const Header: FC = () => {
	const [open, setOpened] = React.useState(true);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<button
					type="button"
					className={styles.nav__btn}
					onClick={() => setOpened(!false)}
				>
					<span className="visually-hidden">Открыть меню</span>
				</button>
				<div className={open ? styles.nav__wrapper : ''}>
					<ul className={styles.nav__list}>
						<li>
							<Link href="#">Features</Link>
						</li>
						<li>
							<Link href="#">Customers</Link>
						</li>
						<li>
							<Link href="/products">Pricing</Link>
						</li>
						<li>
							<Link href="#">Company</Link>
						</li>
					</ul>
					<ul className={styles.nav__auth}>
						<li>
							<Link color="inherit" href="#">
								Login
							</Link>
						</li>
						<li>
							<Link color="inherit" href="#">
								Sign up
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
