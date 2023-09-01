'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <div>
      <h1>Страница не найдена.</h1>
    </div>
  )
}

export default NotFound
