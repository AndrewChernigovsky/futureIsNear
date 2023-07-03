import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
	return (
		<div>
			<Link href="#">Features</Link>
			<Link href="#">
				Customers
			</Link>
			<Link href="/products">Pricing</Link>
			<Link href="#">Company</Link>
			<Link color="inherit" href="#">
				Login
			</Link>
			<Link color="inherit" href="#">
				Sign up
			</Link>
		</div>
	);
};

export default Header;
