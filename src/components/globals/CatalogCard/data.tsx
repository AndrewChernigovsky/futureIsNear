import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { v4 as id } from 'uuid'
import { categoriesT } from '../types/CatalogType'

export const characteristics: {
	electronics: {
		categories: categoriesT
	}
	garden: {
		categories: categoriesT
	}
	clothes: {
		categories: categoriesT
	}
	premium: {
		categories: categoriesT
	}
	food: {
		categories: categoriesT
	}
}[] = [
	{
		electronics: {
			categories: [
				{
					name: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: '24" Монитор Teefy 165 гц игровой плоский без рамки full hd, черный матовый',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Видеокарта XFX Inc. Radeon RX 580 8 ГБ (AMD RX 580)',
					weight: '400',
					cost: 18000,
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
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
					path: 'https://ir.ozone.ru/s3/multimedia-2/wc1000/6711271742.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Проводная, игровая компьютерная мышь inphic PW2H - с бесшумными кнопками и подсветкой',
					weight: '400',
					cost: 18000,
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
		garden: {
			categories: [
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель, распылитель жидкости, пульверизатор для воды',
					weight: '400',
					cost: 209,
					path: 'https://ir.ozone.ru/s3/multimedia-m/wc1000/6697548058.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Опрыскиватель для растений, 1,5 л',
					sizes: '20',
					color: 'black',
					desc: 'Опрыскиватель для растений, 1,5 л',
					weight: '400',
					cost: 324,
					path: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6253563727.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
			],
		},
		clothes: {
			categories: [
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак NIKKI nanaomi',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак NIKKI nanaomi',
					weight: '400',
					cost: 835,
					path: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/6372474827.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Рюкзак JAIFAS',
					sizes: '20',
					color: 'black',
					desc: 'Рюкзак JAIFAS',
					weight: '400',
					cost: 545,
					path: 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6250659399.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
			],
		},
		premium: {
			categories: [
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Толстовка BAPE',
					sizes: '20',
					color: 'black',
					desc: 'Толстовка BAPE',
					weight: '400',
					cost: 2029,
					path: 'https://ir.ozone.ru/s3/multimedia-l/wc1000/6771740781.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Свитшот PUMA',
					sizes: '20',
					color: 'black',
					desc: 'Свитшот PUMA',
					weight: '400',
					cost: 1744,
					path: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6718512577.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
			],
		},
		food: {
			categories: [
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					sizes: '32 дюйма',
					color: 'black',
					desc: 'Гречка ядрица в пакетиках для варки Makfa, 400 г',
					weight: '400',
					cost: 57,
					path: 'https://ir.ozone.ru/s3/multimedia-6/wc1000/6401191170.jpg',
					id: id(),
					image: (size: number, color: string) => {
						return <AiOutlineLogin size={size} color={color} />
					},
					resizes: '1920x1080',
					rate: 3.43,
				},
				{
					name: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					sizes: '32 дюйма',
					color: 'black',
					desc: "Чипсы картофельные Lay's Рифленые Паприка, 140 г",
					weight: '140',
					cost: 125,
					path: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6487693596.jpg',
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
