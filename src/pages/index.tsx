import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { HomePage } from 'components/pages/HomePage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HomePage />
        <Link href="/about">
          <a>to about test</a>
        </Link>
        <a href="https://nextjs.org">Next.js!</a>
      </div>
    </div>
  )
}

export default Home
