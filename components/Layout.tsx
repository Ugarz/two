import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

// HTML5 meta open graph protocol
// https://developers.facebook.com/docs/sharing/webmasters
const Layout = ({ children, title = 'FullStack web developer' }: Props) => (
  <div className=''>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="FullStack web developer" />
      <meta name="keywords" content="developer, javascript, coder, code, react, microservices, node, nodejs, toulouse, blockchain, web3" />
      <meta name="revisit-after" content="1 month" />
      <meta name="robots" content="All" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#aa0039" />
      <meta property="og:title" content="Yet another Coding Monkey website!" />
      <meta property="og:url" content="https://ugoarzur.fr" />
      <meta property="og:description" content="Hello my name is Ugo and I'm a web developer for several years now. I love to develop solutions to your pain points, and discover more on the blockchain ecosystem." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
    </Head>

    <header>
      <section className='h-screen justify-center items-center sm:h-auto md:container md:mx-auto text-center flex flex-col'>
        <h1 className='xsm:my-20 text-2xl md:text-4xl text-white' title="Developer Javascript (react, nodejs)">{title}</h1>
        <p><em className='bg-emerald-500 px-2 py-0.5 mx-2 rounded-sm'>Available</em>- looking for opportunities!</p>
        <ul className='flex flex-col my-3 md:flex-row justify-center'>
          <li className='justify-center inline-flex md:mr-1 transition-all duration-150 opacity-70 hover:opacity-100 sm:bg-gray-900 sm:bg-slate-900 py-2 px-5 rounded-sm'>
            <Link href="https://twitter.com/ArzurUgo">
              <a
                className='flex'
                target="_blank"
                title="Follow me on Twitter">Find me on Twitter <img className="pl-3 h-5" src="twitter.svg" alt="Twitter logo" /></a>
            </Link>
          </li>
          <li className='justify-center inline-flex transition-all duration-150 opacity-70 hover:opacity-100 sm:bg-gray-900 sm:bg-slate-900 py-2 px-5 rounded-sm'>
            <Link href="https://www.linkedin.com/in/ugarz/">
              <a
                className='flex'
                target="_blank"
                title="Contact me via Email">Write me on LinkedIn <img className="pl-3 h-5" src="linkedin-icon.svg" alt="Gmail icon" /></a>
            </Link>
          </li>
        </ul>
      </section>
    </header>
    <main>
      {children}
    </main>
    <footer className='flex justify-center align-center w-full bg-slate-900 h-auto my-10 py-5 italic'>
      Made with ❤ by me.
    </footer>
  </div>
)

export default Layout
