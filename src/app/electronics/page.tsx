import Layout from "@/components/globals/Layout/Layout";
import { NextPage } from "next";
import Product from "./product/Product";
import { characteristics } from "./product/data";
import styles from "./Page.module.scss";
import { ProductI } from "./product/Product";

const Page: NextPage = () => {
	return (
		<Layout showSidebar>
			<h1>Электроника</h1>
			<div className={styles.category}>
				<div className={styles.products}>
					{characteristics[0].electronics.categories.map(
						(product) => {
							return (
								<>
									<div
										className={styles.products__product}
										key={product.id}
									>
										<Product
											cost={product.cost}
											weight={product.weight}
											color={product.color}
											name={product.name}
											sizes={product.sizes}
											href={product.href}
											desc={product.desc!}
											path={product.path}
											rate={product.rate}
										/>
									</div>
								</>
							);
						},
					)}
				</div>
			</div>
			<div className={styles.pagination}></div>
		</Layout>
	);
};

export default Page;
