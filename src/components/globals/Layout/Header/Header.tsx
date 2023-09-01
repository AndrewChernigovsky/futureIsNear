'use client'

import { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { categories } from './data'
import { ImSearch } from 'react-icons/im'

const Header: FC = () => {
  const breakpoint = 1024

  const [open, setOpened] = useState(true)
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
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button
            type="button"
            className={styles.nav__btn}
            onClick={() => setOpened(!open)}
          >
            <span></span>
            <span className="visually-hidden">Открыть меню</span>
          </button>
          <div
            className={
              open
                ? styles.nav__wrapper + ' ' + styles.active
                : styles.nav__wrapper
            }
          ></div>
          <form action="" method="post" className={styles.header__form}>
            <input type="search" name="search" id="search" />
            <button type="submit">
              <ImSearch size={30} color={'blue'} />
            </button>
          </form>
          <ul className={styles.nav__auth}>
            {categories.map((el: any, index: number) => {
              return (
                <li key={index}>
                  <Link color="inherit" href={el.href}>
                    {windowWidth <= breakpoint ? (
                      <>
                        {el.image((el.size = 30), (el.color = 'orange'))}
                        <span className="visually-hidden">{el.desc}</span>
                      </>
                    ) : (
                      <>
                        {el.image((el.size = 40), (el.color = 'white'))}
                        <span style={{ color: el.color }}>{el.name}</span>
                      </>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
