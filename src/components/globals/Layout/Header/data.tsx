import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { AiOutlineLogin } from 'react-icons/ai'

let sizeDefault = 50
let colorDefault = 'black'

export const categories: {
	name: string
	href: string
	size: number
	color: string
	image: (size: number, color: string) => React.JSX.Element
	desc: string
}[] = [
	{
		href: '/auth',
		name: 'Войти',
		size: sizeDefault,
		color: colorDefault,
		image: (size: number, color: string) => {
			return <AiOutlineLogin size={size} color={color} />
		},
		desc: 'Войти',
	},
	{
		href: '/orders',
		name: 'Заказы',
		size: sizeDefault,
		color: colorDefault,
		image: (size: number, color: string) => {
			return <FiShoppingBag size={size} color={color} />
		},
		desc: 'Заказы',
	},
	{
		href: '/favorites',
		name: 'Избранное',
		size: sizeDefault,
		color: colorDefault,
		image: (size: number, color: string) => {
			return <AiFillHeart size={size} color={color} />
		},
		desc: 'Избранное',
	},
	{
		href: '/cart',
		name: 'Корзина',
		size: sizeDefault,
		color: colorDefault,
		image: (size: number, color: string) => {
			return <FaShoppingCart size={size} color={color} />
		},
		desc: 'Корзина',
	},
]
