export let navList: {
	href: string;
	name: string;
}[] = [
	{
			href: '/features',
			name: 'Услуги'
		},
		{
			href: '/customers',
			name: 'Клиенты',
		
		},
		{
			href: '/products',
			name: 'Цены',
		},
		{
			href: '/company',
			name: 'О компании'
		}
	];

export let navAuth: {
	href: string;
	name: string;
	image: string;
}[] = [
	{
		href: '/login',
		name: 'Войти',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/login.svg',
	},
	{
		href: '/orders',
		name: 'Заказы',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/orders.svg',
	},
	{
		href: '/favorites',
		name: 'Избранное',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/favorites.svg',
	},
	{
		href: '/cart',
		name: 'Корзина',
		image: 'http://chernigovsky1081.eternalhost.info/img/futureIsNear/cart.svg',
	},
];