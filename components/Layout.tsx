import React, { ReactNode } from 'react'
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

    <header>
      <section className='container mx-auto text-center'>
        <h1 className='xsm:my-20 text-2xl md:text-4xl text-white' title="Developer Javascript (react, nodejs)">FullStack web developer</h1>
        <p><em className='bg-emerald-500 px-2 py-0.5 rounded'>Available</em>- looking for opportunities!</p>
        <ul className='flex flex-rows justify-center'>
          <li><a target="_blank" title="Follow me on Twitter" href="https://twitter.com/ArzurUgo">Find me on Twitter 🐦</a></li>
          <li><a title="Contact me via Email" href="mailto:ugo.arzur@gmail.com">write me an email 👋🏻</a></li>
        </ul>
      </section>
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
