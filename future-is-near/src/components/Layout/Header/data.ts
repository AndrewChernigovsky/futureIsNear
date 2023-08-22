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
		image: '/login.svg',
	},
	{
		href: '/orders',
		name: 'Заказы',
		image: '/orders.svg',
	},
	{
		href: '/favorites',
		name: 'Избранное',
		image: '/favorites.svg',
	},
	{
		href: '/cart',
		name: 'Корзина',
		image: '/cart.svg',
	},
];