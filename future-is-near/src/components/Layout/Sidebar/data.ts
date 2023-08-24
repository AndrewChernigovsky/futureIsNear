export let categories: {
	name: string;
	href: string;
	image: string;
	desc: string;
}[] = [
	{
		href: '/card',
		name: 'Карта',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/credit-card.png',
		desc: '',
	},
	{
		href: '/tickets',
		name: 'Билеты',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/ticket.png',
		desc: '',
	},
	{
		href: '/electronics',
		name: 'Электроника',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/electronics.png',
		desc: '',
	},
	{
		href: '/house_and_garden',
		name: 'Дом и сад',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/plant.png',
		desc: '',
	},
	{
		href: '/clothes_shoose',
		name: 'Одежда и обувь',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/clothes.png',
		desc: '',
	},
	{
		href: '/childens_goods',
		name: 'Детские товары',
		image: '/childsGoods.png',
		desc: '',
	},
	{
		href: '/stocks',
		name: 'Акции',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/stocks.png',
		desc: '',
	},
	{
		href: '/premium',
		name: 'Premium',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/premium.png',
		desc: '',
	},
	{
		href: '/brands',
		name: 'Бренды',
		image: '/brand.png',
		desc: '',
	},
	{
		href: '/food',
		name: 'Продукты Питания',
		image: '/food.png',
		desc: '',
	},
];

// export let categories1 = async function getData() {
// 	const res = await fetch(
// 		'http://194.61.0.8/www/chernigovsky1081.eternalhost.info/img/sprite.svg',
// 		{
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json;charset=utf-8',
// 			},
// 		}
// 	);
// 	// The return value is *not* serialized
// 	// You can return Date, Map, Set, etc.

// 	if (!res.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data');
// 	}

// 	return res.json();
// };
