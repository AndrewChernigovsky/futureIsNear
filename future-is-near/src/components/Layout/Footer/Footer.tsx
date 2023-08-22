import styles from './Footer.module.scss'

import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<ul className={styles.footer__nav}>
					<li className={styles.footer__item}>
						<Link href="#">Features</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="#">Customers</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="/products">Pricing</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="#">Company</Link>
					</li>
					<li className={styles.footer__item}>
						<Link color="inherit" href="#">Login</Link>
					</li>
					<li className={styles.footer__item}>
						<Link color="inherit" href="#">Sign up</Link>
					</li>
				</ul>
				<span>all rigths reserved 2010-2023</span>
			</div>
		</footer>
	);
};

export default Footer;
