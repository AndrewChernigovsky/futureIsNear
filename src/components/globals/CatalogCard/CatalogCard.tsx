import { FC } from 'react'
import styles from './CatalogCart.module.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'

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
				<div className={styles.card__buttons}>
					<button type="button">
						Купить
						<AiOutlineShoppingCart size={20} />
					</button>
					<button type="button">
						Избранное
						<BiLike size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CatalogCard
