import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import Projects from '../components/Projects'

const Home = () => (
  <Layout>
    <section className="md:container md:mx-auto text-center">
      <Projects />
    </section>
  </Layout >
)


export default Home