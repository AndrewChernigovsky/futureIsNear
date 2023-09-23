import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { v4 as id } from 'uuid'

type category = {
	name?: string
	href?: string
	sizes?: string
	color?: string
	desc?: string
	weight?: string
	cost?: string
	path?: string
	id?: string
	image?: (size: number, color: string) => React.JSX.Element
	resizes?: string
	rate?: number
}[]

export const characteristics: {
	electronics: {
		categories: category
	}
}[] = [
	{
		electronics: {
			categories: [
				{
					name: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					href: '/displays/teefy/display1',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: '18 000',
					path: 'https://ir.ozone.ru/s3/multimedia-q/wc1000/6697515878.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					href: '/displays/teefy/display1',
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: '18 000',
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6569634655.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					href: '/displays/teefy/display1',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: '18 000',
					path: 'https://ir.ozone.ru/s3/multimedia-q/wc1000/6697515878.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					href: '/displays/teefy/display1',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: '18 000',
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
			],
		},
	},
]
