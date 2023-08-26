'use client'

import { FC } from 'react'
import styles from './Sidebar.module.scss'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { categories } from './data'

const Sidebar: FC = () => {
  const breakpoint = 768
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
	
	

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__wrapper}>
			  {categories.map((el: { href: string; name: string; image: string; desc: string}, index: number) => {
          return (
            <li key={index}>
              <Link color="inherit" href={el.href}>
                {windowWidth <= breakpoint ? (
                  <Image src={el.image} width={30} height={30} alt={el.desc} />
                ) : (
                  <>
                    <Image
                      src={el.image}
                      width={40}
                      height={40}
                      alt={el.desc}
                    />
                    {`${el.name}`}
                  </>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
