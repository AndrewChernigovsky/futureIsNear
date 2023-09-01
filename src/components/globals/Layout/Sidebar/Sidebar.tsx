'use client'

import { FC } from 'react'
import styles from './Sidebar.module.scss'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { categories } from './data'

const Sidebar: FC = () => {
  const breakpoint = 768
  const [windowWidth, setWindowWidth] = useState(globalThis.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(globalThis.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__wrapper}>
        {categories.map(
          (
            el: {
              href: string
              name: string
              size: number
              color: string
              image: (size: number, color: string) => React.JSX.Element
              desc: string
            },
            index: number,
          ) => {
            return (
              <li key={index}>
                <Link color="inherit" href={el.href}>
                  {windowWidth <= breakpoint ? (
                    <>
                      {el.image((el.size = 20), (el.color = 'blue'))}
                      <span className="visually-hidden">{el.desc}</span>
                    </>
                  ) : (
                    <>
                      {el.image((el.size = 25), (el.color = 'blue'))}
                      <span style={{ color: el.color }}>{el.name}</span>
                    </>
                  )}
                </Link>
              </li>
            )
          },
        )}
      </ul>
    </aside>
  )
}

export default Sidebar
