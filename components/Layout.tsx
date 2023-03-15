import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Currently from './Currently'

type Props = {
  children?: ReactNode
  title?: string
}
const defaultJobTitle = "💻Software Engineer Blockchain⛓"

// HTML5 meta open graph protocol
// https://developers.facebook.com/docs/sharing/webmasters
const Layout = ({ children, title = defaultJobTitle }: Props) => (
  <div className='my-20'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={defaultJobTitle} />
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
    <div className='container mx-auto'>
      <header>
        <section className='h-screen sm:h-auto md:container md:mx-auto text-center flex flex-col'>
          <h1 className='px-5 xsm:my-20 text-2xl md:text-4xl text-white font-roboto'>{title}</h1>
          <Currently free={false} />
          <ul className='flex flex-col my-3 md:flex-row justify-center'>
            <li className='font-roboto justify-center inline-flex md:mr-1 transition-all duration-150 cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-200 hover:font-medium hover:text-black sm:bg-gray-900 sm:bg-slate-900 py-2 px-5 rounded-sm'>
              <Link href="https://twitter.com/ArzurUgo"
                className='flex'
                target="_blank"
                title="Follow me on Twitter">
                Find me on Twitter
                <div className='h-5 w-6 ml-3 relative'>
                  <Image
                    className="pl-3 h-5"
                    src="/twitter.svg"
                    objectFit='cover'
                    layout='fill'
                    alt="Twitter logo" />
                </div>
              </Link>
            </li>
            <li className='font-roboto justify-center inline-flex transition-all duration-150 cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-200 hover:font-medium hover:text-black sm:bg-gray-900 sm:bg-slate-900 py-2 px-5 rounded-sm'>
              <Link
                href="https://www.linkedin.com/in/ugarz/"
                className='flex'
                target="_blank"
                title="Contact me via Email">
                Write me on LinkedIn
                <div className='h-6 w-6 ml-3 relative'>
                  <Image
                    className="pl-3 h-5"
                    src="/linkedin-icon.svg"
                    objectFit='cover'
                    layout='fill'
                    alt="LinkedIn icon" />
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </header>
      <main>
        {children}
      </main>
    </div>
    <footer className='flex justify-center align-center w-full bg-slate-900 h-auto my-10 py-5 italic'>
      Made with ❤ by me.
    </footer>
  </div>
)

export default Layout
