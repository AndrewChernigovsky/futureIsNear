export let data: [{
	icons: {
		search: string;
		avatar: string;
	};
	path_nav: {
		nav_list: {
			features: string;
			customers: string;
			products: string;
			company: string;
		};
		nav_auth: {
			auth: string;
			orders: string;
			favorites: string;
			cart: string;
		};
	};
	names_nav: {
		features: string;
		customers: string;
		products: string;
		company: string;
		auth: string;
		orders: string;
		favorites: string;
		cart: string;
	};
	sidebar_items: {
		item1: string;
	};
}] = [
	{
		icons: {
			search: '/search.svg',
			avatar: '/avatar.png',
		},
		path_nav: {
			nav_list: {
				features: '/features',
				customers: '/customers',
				products: '/products',
				company: '/company',
			},
			nav_auth: {
				auth: '/login',
				orders: '/orders',
				favorites: '/favorites',
				cart: '/cart',
			},
		},
		names_nav: {
			features: 'Услуги',
			customers: 'Клиенты',
			products: 'Цены',
			company: 'О компании',
			auth: 'Войти',
			orders: 'Заказы',
			favorites: 'Избранное',
			cart: 'Корзина',
		},
		sidebar_items: {
			item1: '',
		},
	},
];