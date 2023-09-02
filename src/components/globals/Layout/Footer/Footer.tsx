import styles from './Footer.module.scss'

import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<ul className={styles.footer__nav}>
					<li className={styles.footer__item}>
						<Link href="#">Наши партнеры</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="#">Горячая линия</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="/products">тех. поддержка</Link>
					</li>
					<li className={styles.footer__item}>
						<Link href="#">О нас</Link>
					</li>
					<li className={styles.footer__item}>
						<Link color="inherit" href="#">Стать партнером</Link>
					</li>
					<li className={styles.footer__item}>
						<Link color="inherit" href="#">Стать амбассадором</Link>
					</li>
				</ul>
				<span className={styles.footer__rights}>все права защищены 2010г-2023г</span>
			</div>
		</footer>
	);
};

export default Footer;
