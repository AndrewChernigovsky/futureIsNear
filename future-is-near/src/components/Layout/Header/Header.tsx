import { FC } from 'react';
import React from 'react'
import Link from 'next/link';
import styles from './Header.module.scss';

const Header: FC = () => {
	const [open, setOpened] = React.useState(true);
	console.log(open);

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
								<Link href="/features">Features</Link>
							</li>
							<li>
								<Link href="/customers">Customers</Link>
							</li>
							<li>
								<Link href="/products">Pricing</Link>
							</li>
							<li>
								<Link href="/company">Company</Link>
							</li>
						</ul>
					</div>
						<ul className={styles.nav__auth}>
							<li>
								<Link color="inherit" href="/login">
									Login
								</Link>
							</li>
							<li>
								<Link color="inherit" href="/signUp">
									Sign up
								</Link>
							</li>
						</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
