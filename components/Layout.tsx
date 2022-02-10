import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BuyMeCoffee from '../components/BuyMeCoffee'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'FullStack web developer - Coding Monkey' }: Props) => (
  <div className=''>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="FullStack web developer - Coding Monkey" />
      <meta name="keywords" content="developer, javascript, coder, code, react, microservices, node, nodejs, toulouse, blockchain, web3" />
      <meta name="revisit-after" content="1 month" />
      <meta name="robots" content="All" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#303239" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ugo Arzur" />
    </Head>

    <header className='h-20 flex justify-center'>
      <nav className='sm:text-lg'>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <div>
        <BuyMeCoffee />
      </div>
    </footer>
  </div>
)

export default Layout
