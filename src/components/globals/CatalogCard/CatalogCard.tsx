import { FC } from 'react'
import styles from './CatalogCart.module.scss'

type TCard = {
	image: string
	title: string
	price: number
}

const CatalogCard: FC<TCard> = ({ image, title, price }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__wrapper}>
				<div className={styles.cardPicture}>
					<img src={image} alt="" />
				</div>
				<div className={styles.cardInfo}>
					<div className={styles.cardInfo__title}>
						{title.slice(0, 20)}
					</div>
					<div className={styles.cardInfo__price}>{price}</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogCard
