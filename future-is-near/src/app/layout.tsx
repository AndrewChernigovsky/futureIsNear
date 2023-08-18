import './globals.scss'
import Layout from "@/components/Layout/Layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Компьютер | Главная  ',
	description:
		'Купить компьютер недорого, дешевые комплектующие, видеокарты, оперативная память',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<html lang="en">
				<body>{children}</body>
			</html>
		</>
	);
}
