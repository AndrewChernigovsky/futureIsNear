import React from "react";
import { AiFillCrown } from 'react-icons/ai';
import { IoFastFood } from 'react-icons/io5';
import { GiClothes } from 'react-icons/gi'
import { BsFillHouseFill } from 'react-icons/bs'
import { FaPooStorm } from 'react-icons/fa'


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
    href: '/electronics',
    name: 'Электроника',
    size: sizeDefault,
    color: colorDefault,
    image: (size: number, color: string) => {
      return <FaPooStorm size={size} color={color} />
    },
    desc: 'Электроника',
  },
  {
    href: '/garden',
    name: 'Дом и сад',
    size: sizeDefault,
    color: colorDefault,
    image: (size: number, color: string) => {
      return <BsFillHouseFill size={size} color={color} />
    },
    desc: 'Дом и сад',
  },
  {
    href: '/clothes',
    name: 'Одежда и обувь',
    size: sizeDefault,
    color: colorDefault,
    image: (size: number, color: string) => {
      return <GiClothes size={size} color={color} />
    },
    desc: 'Одежда и обувь',
  },
  {
    href: '/premium',
    name: 'Премиум',
    size: sizeDefault,
    color: colorDefault,
    image: (size: number, color: string) => {
      return <AiFillCrown size={size} color={color} />
    },
    desc: 'Премиум',
  },
  {
    href: '/food',
    name: 'Продукты Питания',
    size: sizeDefault,
    color: colorDefault,
    image: (size: number, color: string) => {
      return <IoFastFood size={size} color={color} />
    },
    desc: 'Продукты Питания',
  },
]
