import { BeakerIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Projects from '../components/Projects'

const Home = () => (
  <Layout>
    <div className='container mx-auto text-center'>
      <h1 className='text-2xl text-white' title="Developer Javascript (react, nodejs)">FullStack web developer</h1>
      <p><em className='bg-emerald-500 px-2 py-0.5 rounded'>Available</em>- looking for opportunities!</p>
      <ul className='flex flex-rows justify-center'>
        <li><a target="_blank" title="Follow me on Twitter" href="https://twitter.com/ArzurUgo">Find me on Twitter 🐦</a></li>
        <li><a title="Contact me via Email" href="mailto:ugo.arzur@gmail.com">write me an email 👋🏻</a></li>
      </ul>
      <Projects />

    </div>

  </Layout>
)

export default Home